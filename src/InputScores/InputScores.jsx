import React from 'react';
import "../styles.css";


export function InputScores(props) {
  const [score, setScore] = React.useState('');
  const userName = props.userName;

  async function calculateAverage(score, old_average,times_submitted) {
    return float(old_average*times_submitted+score)/(times_submitted+1)
  }
  
  
  async function saveScore(score, old_average,times_submitted) {
    const date = new Date().toLocaleDateString();
    const newScore = {name: userName, todayscore: score, averagescore: calculateAverage(score, old_average,times_submitted), times_submitted: times_submitted+1, date: date}
  }
  
  
  
  function updateScoresLocal(score) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      scores = JSON.parse(scoresText);
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
        <form className ="login-container" method="get" action="main.html">
            <div>
              <span>Submit here!</span>
              <input type="text" onChange={(e) => setScore(e.target.value)} placeholder="Your Wordle Score" />
            </div>
            
            <button type="submit" onClick={()=>updateScoresLocal(score)}>Submit</button>
          </form>
          </div>
      </main>);
}