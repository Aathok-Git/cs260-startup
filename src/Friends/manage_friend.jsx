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
             <form className="login-container" method="get">
                <div>
                  <span>Input a Username:</span>
                  <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)} placeholder="Enter Your Friend's Username"/>
                </div>
                <div><button type="submit" onClick={()=>addFriend(friendName)} disabled={!friendName}>Add</button></div>
                <div><button type="submit" onClick={()=>removeFriend(friendName)} disabled={!friendName}>Remove</button></div>
              </form>
            </div>
        </main>
    );
}