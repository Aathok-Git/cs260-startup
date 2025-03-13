import React from 'react';
import "../styles.css";

export function Scores(props) {
    const userName = props.userName;

    const [friendsScores, setFriendsScores] = React.useState([]);

    React.useEffect(() => {
        const name = {userName: userName};
        fetch('/api/friendScores', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(name),
          })
          .then((response) => response.json())
          .then((onlyFriendsScores) => {
            setFriendsScores(onlyFriendsScores);
          });
      }, []);

    
    const scoreBody = [];
    if (friendsScores.length) {
        let scoresToday=false;
        for (const score of friendsScores) {
            const date = new Date().toLocaleDateString();
            if (score.date == date) { 
                scoresToday = true;
                scoreBody.push(
                    <tr>
                        <td>{score.name}</td>
                        <td>{score.todayscore}</td>
                        <td>{score.averagescore}</td>
                    </tr>
                ); 
            }
        }
        if (!scoresToday) {
            scoreBody.push(
                <tr>
                    <td colSpan='3'>No scores submitted for today yet!</td>
                </tr>
            )
        }
    } else if (!friendsScores.length) {
        scoreBody.push(
        <tr>
            <td colSpan='3'>Add a friend to see their scores!</td>
        </tr>
        );
    }

    return (
        <main>
            <div className="users">
                Currently logged in as:
                <span className="user-name">{userName}</span>
              </div>
            <table>
                <thead>
                    <tr>
                        <th>Friend's Username</th>
                        <th>Today's Score</th>
                        <th>Average Score</th>
                    </tr>
                </thead>
                <tbody>{scoreBody}</tbody>
            </table>
          </main>
    );
}
