import React from 'react';
import "../styles.css";

export function About() {
    return (
        <main>
            <img src="Viking House.jpg" alt="Viking House" height="400"/>
            <div><sup>Here's a picture of a viking house since why not.</sup></div>
            <p>Hey!</p> <p></p>
            <p>This is a project for my Web Programming class that I'm currently in. It's a wordle scorekeeping website where you can compare scores with your friends automatically.</p>
          
            <button class="random-button" type="button">Click for a random word!</button> <div>word</div>
        </main>
    );
}