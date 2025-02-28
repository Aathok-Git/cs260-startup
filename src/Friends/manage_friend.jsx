import React from 'react';
import "../styles.css";

export function Friends(props) {
  const userName = props.userName;
  const [friendName, setFriendName] = React.useState('');


  async function addFriend(friendName) {
    localStorage.setItem("friendname", friendName)
  }

  async function removeFriend(friendName) {
    localStorage.removeItem("friendname", friendName)
  }




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
                  <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)} placeholder="Enter Your Friend's Username"/>
                </div>
                <div><button type="submit" onClick={()=>addFriend()} disabled={!friendName}>Add</button></div>
                <div><button type="submit" onClick={()=>removeFriend()} disabled={!friendName}>Remove</button></div>
              </form>
            </div>
        </main>
    );
}