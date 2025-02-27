import React from 'react';
import "../styles.css";

export function Scores(props) {
    const userName = props.userName;

    const [events, setEvent] = React.useState([]);

    const [scores, setScores] = React.useState([]);


    const scoreBody = [];
    if (scores.length) {
        for (const score of scores.entries()) {
        scoreBody.push(
            <tr>
            <td>{score.name}</td>
            <td>{score.todayscore}</td>
            <td>{score.averagescore}</td>
            </tr>
        );
        }
    } else {
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
              <ul className="user-name">
                <li className="user-name">xX_OculusGrift_Xx just submitted their score!</li>
                <li className="user-name">Hyllus_Diff69 just submitted their score!</li>
              </ul>



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