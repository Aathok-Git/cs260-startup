import React from 'react';
import "./about.css";

export function InputScores() {
    return (<main>
        <div class="users">
            Currently logged in as:
            <span class="user-name">Vargach_the_third</span>
          </div>
        <div class="login">
            <h2 class="login-header">Copy and paste your score from the Wordle <a href="https://www.nytimes.com/games/wordle">website</a> here!</h2>
        <form class ="login-container" method="get" action="main.html">
            <div>
              <span>Submit here!</span>
              <input type="text" placeholder="Your Wordle Score" />
            </div>
            
            <button type="submit">Submit</button>
          </form>
          </div>
      </main>);
}