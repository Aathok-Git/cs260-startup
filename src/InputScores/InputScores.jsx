import React from 'react';
import "../styles.css";


export function InputScores(props) {
  const [score, setScore] = React.useState('');
  const userName = props.userName;

  async function calculateAverage(score, old_average,times_submitted) {
    return (old_average*times_submitted+score)/(times_submitted+1);
  }
  
  
  async function saveScore(score, old_average,times_submitted, date) {
    const newScore = {name: userName, todayscore: score, averagescore: await calculateAverage(score, old_average,times_submitted), times_submitted: times_submitted+1, date: date}
    return newScore
  }
  
  function score_validator(score) {
    try{
      let numscore = parseInt(score);
      return [1, 2, 3, 4, 5, 6].includes(numscore);
    } catch {
      return false;
    }
  }
  
  async function updateScoresLocal(todayScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }
    let updated = false;
    const date = new Date().toLocaleDateString();
    for (let scoreItem of scores) {
      if (scoreItem.name === userName) {
        updated = true;
        if(scoreItem.date != date) {
          scoreItem = await saveScore(todayScore, scoreItem.averagescore,scoreItem.times_submitted, date);
        }
        break;
      }
    }
    if(!updated) {
      scores.push(await saveScore(todayScore,0,0, date));
    }
  
    localStorage.setItem('scores', JSON.stringify(scores));
  }

    return (<main>
        <div className="users">
            Currently logged in as: 
            <span className="user-name">{userName}</span>
          </div>
        <div className="login">
            <h2 className="login-header">Type in <ul>just the number of guesses</ul> you took to complete the <a href="https://www.nytimes.com/games/wordle">wordle.</a></h2>
          <div className ="login-container">
            <div>
              <span>Submit here!</span>
              <input type="text" onChange={(e) => setScore(e.target.value)} placeholder="Your Wordle Score" />
            </div>
            
            <button type="submit" onClick={()=>updateScoresLocal(parseInt(score))} disabled={!score_validator(score)}>Submit</button>
          </div>
        </div>
      </main>);
}