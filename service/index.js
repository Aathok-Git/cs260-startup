const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('userName', req.body.userName)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.userName, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ userName: user.userName });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('userName', req.body.userName);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ userName: user.userName });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetScores
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  const scores = await DB.getHighScores();
    res.send(scores);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, async (req, res) => {
  await updateScores(req.body, res);
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});


// calculates the average score for the score updater
async function calculateAverage(score, old_average,times_submitted) {
  return (old_average*times_submitted+score)/(times_submitted+1);
}

// helper function to format the score for storage
async function saveScore(userName, score, old_average, times_submitted, date) {
  const newScore = {name: userName, todayscore: score, averagescore: await calculateAverage(score, old_average,times_submitted), times_submitted: times_submitted+1, date: date}
  return newScore;
}

// Updates the score DB (upgrade from prev version)
async function updateScores(newScore, res) {
  const score = getScore(newScore.name);
  if (score) {
    if (score.date != newScore.date) {
      scoreItem = await saveScore(score.name, newScore.todayScore, score.averagescore,score.times_submitted, newScore.date);
      
    }
  }
}







// Updates the score list
async function oldupdateScores(newScore, res) {
  let updated =   false;
  for (let scoreItem of scores) {
    if (scoreItem.name === newScore.name) {
      updated = true;
      if(scoreItem.date != newScore.date) {
        scoreItem = await saveScore(scoreItem.name, newScore.todayScore, scoreItem.averagescore,scoreItem.times_submitted, newScore.date);
        res.status(201).send({ msg: 'Score updated successfully' });
        return;
      }
      res.status(409).send({ msg: 'Already submitted a score for today'});
      return;
    }
  }
  if(!updated) {
    const addScore = await saveScore(newScore.name, newScore.todayScore, 0, 0, newScore.date);
    scores.push(addScore);
    res.status(201).send({ msg: 'Score added successfully' });
  }
}

//adds a friend to the active user's friends list
apiRouter.post('/addFriend', verifyAuth, async (req, res) => {
  let user = await findUser("userName", req.body.userName); //Gets the index of the user
  if (user) { 
    if (await findUser("userName", req.body.friendName)) { //Checks if friend is a registered user
      if (!user.friends.includes(req.body.friendName)) {
        user.friends.push(req.body.friendName);
        res.status(201).send({ msg: 'Friend added successfully' });
        return;
      }
      res.status(406).send({ msg: 'Friend is already added as a friend'});
      return;
    }
    res.status(406).send({ msg: 'Friend is not registered on WordleWithFriends'});
    return;
  }
})

//removeFriends removes a friend from the friends list
apiRouter.post('/removeFriend', verifyAuth, async (req, res) => {
  let user = await findUser("userName", req.body.userName); 
  if (user) { 
    let index = user.friends.findIndex((e) => e === req.body.friendName); //gets the index in the friends list of the friend to be removed
    if (index >= 0) {
      user.friends.splice(index,1);
      res.status(201).send({msg: 'Friend successfully removed'});
      return;
    }
    res.status(406).send({ msg: 'Friend is not in the friends list!'});
    return;
  }
  res.status(406).send({ msg: 'Friend is not registered on WordleWithFriends'});
  return;
})


async function getFriendsList(userName) {
  let user = await findUser("userName", userName)
  if (user) {
      return user.friends;
    }
  return false;
}

//getFriends searches the active user and returns their friends list
apiRouter.get('/getFriends', verifyAuth, async (req, res) => {
  res.send(await getFriendsList(req.body.userName));
});

//get friends scores
apiRouter.post('/friendScores', verifyAuth, async (req, res) => {
  const onlyFriendsScores = [];
  const selfScore =await findScore("name", req.body.userName);
  if(selfScore) {
    onlyFriendsScores.push(selfScore);
  }
  const friendslist = await getFriendsList(req.body.userName);
  for (const name of friendslist) {
    const friendScore = await findScore("name", name);
    if(friendScore) {
      onlyFriendsScores.push(friendScore)
    }
  }
  res.send(onlyFriendsScores);
})


async function createUser(userName, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: passwordHash,
    friends: [],
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

async function findScore(field, value) {
  if (!value) return [];

  return scores.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
