const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('WordleWithFriends');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(userName) {
  return userCollection.findOne({ userName: userName });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ userName: user.userName }, { $set: user });
}

async function addScore(score) {
  return scoreCollection.insertOne(score);
}

async function updateScore(score) {
  await scoreCollection.updateOne({name: score.name}, { $set: score});
}

async function getScore(userName) {
  return scoreCollection.findOne({ name: userName})
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addScore,
  updateScore,
  getScore,
};
