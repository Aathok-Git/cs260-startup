import React from 'react';
import "../styles.css";

export function About(props) {

    const [word, setWord] = React.useState('getting a word...');    

    React.useEffect(() => {
        setWord('');
    }, [])

    async function getWord() {
        setWord('Getting a  5 letter word...');
        fetch("https://random-word-api.herokuapp.com/word?length=5")
        .then((word) => word.json())
        .then((data) => {
            setWord(data);
        })
        .catch((error) => {
            setWord('An error occured when fetching a word!');
            console.error(error);
        });
    }


    return (
        <main>
            <img src="Viking House.jpg" alt="Viking House" height="400"/>
            <div><sup>Here's a picture of a viking house since why not.</sup></div>
            <p>Hey!</p> <p></p>
            <p>This is a project for my Web Programming class that I'm currently in. It's a wordle scorekeeping website where you can compare scores with your friends automatically.</p>
          
            <button className="random-button" type="button" onClick={() => getWord()}>Click for a random 5-letter word!</button> <div>{word}</div>
        </main>
    );
}