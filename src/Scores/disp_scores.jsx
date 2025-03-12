import React from 'react';
import "../styles.css";

export function Scores(props) {
    const userName = props.userName;

    const [friendslist, setFriends] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/scores')
          .then((response) => response.json())
          .then((scores) => {
            setScores(scores);
          });
        fetch('/api/getFriends', )
        .then((response) => response.json())
        .then((friends) => {
            setFriends(friends);
        });
      }, []);

    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          setScores(JSON.parse(scoresText));
        }
        const friendsText = localStorage.getItem('friendslist');
        if (friendsText) {
            setFriends(JSON.parse(friendsText));
        }
      }, []);


    const scoreBody = [];
    if (scores.length && friendslist.length) {
        let scoresToday=false;
        for (const score of scores) {
            const date = new Date().toLocaleDateString();
            if (score.date == date && (friendslist.includes(score.name) || score.name == userName)) { // add check to see if person is in friends list
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
    } else if (!friendslist) {
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


// <ul className="user-name">
//                 <li className="user-name">xX_OculusGrift_Xx just submitted their score!</li>
//                 <li className="user-name">Hyllus_Diff69 just submitted their score!</li>
//               </ul>

{/* <tr>
                        <td>Robin_Banks1</td>
                        <td>3/6</td>
                        <td>3.8</td>
                    </tr>
                    <tr>
                        <td>xX_OculusGrift_Xx</td>
                        <td>5/6</td>
                        <td>5.9</td>
                    </tr>
                    <tr>
                        <td>F.A.</td>
                        <td>3/6</td>
                        <td>2.9</td>
                    </tr>
                    <tr>
                        <td>Hyllus_Diff69</td>
                        <td>6/6</td>
                        <td>4.8</td>
                    </tr> */}