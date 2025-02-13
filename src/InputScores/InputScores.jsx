import React from 'react';
import "../styles.css";

export function InputScores() {
    return (<main>
        <div className="users">
            Currently logged in as:
            <span className="user-name">Vargach_the_third</span>
          </div>
        <div className="login">
            <h2 className="login-header">Copy and paste your score from the Wordle <a href="https://www.nytimes.com/games/wordle">website</a> here!</h2>
        <form className ="login-container" method="get" action="main.html">
            <div>
              <span>Submit here!</span>
              <input type="text" placeholder="Your Wordle Score" />
            </div>
            
            <button type="submit">Submit</button>
          </form>
          </div>
      </main>);
}