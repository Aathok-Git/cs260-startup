import React from 'react';
import { ScoreEvent, ScoreNotifier } from '../InputScores/ScoreNotifier';
import "../styles.css";


export function InputScores(props) {
  const [score, setScore] = React.useState('');
  const userName = props.userName;
  
  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, todayScore: score, date: date };

    const response = await fetch('/api/score', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });

    if (response?.status === 200) {
      ScoreNotifier.broadcastEvent
    }
    
    else if (response?.status === 201) {
      const body = await response.json();
      alert(body.msg);
    }
    else if (response?.status === 409) {
      const body = await response.json();
      alert(body.msg);
    };
  }
  
  function score_validator(score) {
    try{
      let numscore = parseInt(score);
      return [1, 2, 3, 4, 5, 6].includes(numscore);
    } catch {
      return false;
    }
  }
  
    return (<main>
        <div className="login">
            <h2 className="login-header">Type in <ul>just the number of guesses</ul> you took to complete the <a href="https://www.nytimes.com/games/wordle">wordle.</a></h2>
          <div className ="login-container">
            <div>
              <span>Submit here!</span>
              <input type="text" onChange={(e) => setScore(e.target.value)} placeholder="Your Wordle Score" />
            </div>
            
            <button type="submit" onClick={()=>saveScore(parseInt(score))} disabled={!score_validator(score)}>Submit</button>
          </div>
        </div>
      </main>); 
}