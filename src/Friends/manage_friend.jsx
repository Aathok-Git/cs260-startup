import React from 'react';
import "../styles.css";

export function Friends() {
    return (
        <main>
            <div className="users">
                Currently logged in as:
                <span className="user-name">{userName}</span>
              </div>
              
            <div className="login">
                <h2 className="login-header">Add or Remove a friend from your list here!</h2>
             <form className="login-container" method="get" action="main.html">
                <div>
                  <span>Input a Username:</span>
                  <input type="text" placeholder="Enter Your Friend's Username"/>
                </div>
                <div><button type="submit">Add</button></div>
                <div><button type="submit">Remove</button></div>
              </form>
            </div>
        </main>
    );
}