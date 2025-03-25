import React from 'react';
import "../styles.css";

export function Friends(props) {
  const userName = props.userName;
  const [friendName, setFriendName] = React.useState('');
  

  async function addFriend(friendName) {
    const friend = {userName: userName, friendName: friendName};
    await fetch('/api/addFriend', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(friend),
    })
    .then((response) => {
      if (response.status == 406) {
        window.alert(`The friend username: ${friendName} is not registered on WordleWithFriends`);
      } else if (response.status == 409){
        window.alert(`${friendName} is already in your friends list!`);
      } else if (response.status == 404) {
        window.alert("Your user wasn't found! Please try logging in again.");
      }
    });
  }
 
  async function removeFriend(friendName) {
    const friend = {userName: userName, friendName: friendName};
    await fetch('/api/removeFriend', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(friend),
    });
  }

    return (
        <main>
            <div className="users">
                Currently logged in as: 
                <span className="user-name"> {userName}</span>
              </div>
              
            <div className="login">
                <h2 className="login-header">Add or Remove a friend from your list here!</h2>
             <div className="login-container">
                <div>
                  <span>Input a Username:</span>
                  <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)} placeholder="Enter Your Friend's Username"/>
                </div>
                <div><button type="submit" onClick={()=> addFriend(friendName)} disabled={!friendName}>Add</button></div>
                <div><button type="submit" onClick={()=> removeFriend(friendName)} disabled={!friendName}>Remove</button></div>
              </div>
            </div>
        </main>
    );
}