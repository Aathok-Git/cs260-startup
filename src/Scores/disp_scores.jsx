import React from 'react';
import "../styles.css";

export function Scores() {
    return (
        <main>
            <div class="users">
                Currently logged in as:
                <span class="user-name">Vargach_the_third</span>
              </div>
              <ul class="user-name">
                <li class="user-name">xX_OculusGrift_Xx just submitted their score!</li>
                <li class="user-name">Hyllus_Diff69 just submitted their score!</li>
              </ul>



            <table>
                <thead>
                    <tr>
                        <th>Friend's Username</th>
                        <th>Today's Score</th>
                        <th>Average Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
          </main>
    );
}