import React from 'react';
import "./about.css";

export function Friends() {
    return (
        <main>
            <div class="users">
                Currently logged in as:
                <span class="user-name">Vargach_the_third</span>
              </div>
              
            <div class="login">
                <h2 class="login-header">Add or Remove a friend from your list here!</h2>
             <form class="login-container" method="get" action="main.html">
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