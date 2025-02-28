import React from 'react';
import "../styles.css";

export function Friends(props) {
  const userName = props.userName;
  const [friendName, setFriendName] = React.useState('');
  const [friendslist, setFriendsList] = React.useState([]);
  // const arrayFriendsList = JSON.parse(localStorage.getItem(friendslist)); will add this line once database is up

  async function addFriend(friendName) {
    const index = friendslist.indexOf(friendName);
    if (index < 0) { // only execute code if the friend is not in the friend's list already
      friendslist.push(friendName); 
      localStorage.setItem("friendslist", friendslist);
    }
  }

  async function removeFriend(friendName) {
    setFriendsList(JSON.parse(localStorage.getItem(friendslist)));
    const index = friendslist.indexOf(friendName);
    if (index > -1) { // only splice array when item is found
      friendslist.splice(index, 1); // 2nd parameter means remove one item only
}
    localStorage.removeItem("friendname", friendName);
  }


    return (
        <main>
            <div className="users">
                Currently logged in as: 
                <span className="user-name"> {userName}</span>
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