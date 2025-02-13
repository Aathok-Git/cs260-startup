import React from 'react';
import "../styles.css";

export function Login() {
    return (
        <main>
            <h1>Welcome to Wordle Scoreboard!</h1>
            <div className="login">
              <h2 className="login-header">Log in</h2>
              <form className="login-container" method="get" action="main.html">
              <div>
                <span>User:</span><input type="text" placeholder="Enter Your Username" />
              </div>
              <div>
                <span>Password:</span>
                <input type="password" placeholder="Password" />
              </div>
              <div><button type="submit">Login</button></div>
            </form></div>
          </main>
    );
}