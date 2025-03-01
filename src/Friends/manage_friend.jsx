import React from 'react';
import "../styles.css";

export function Friends(props) {
  const userName = props.userName;
  const [friendName, setFriendName] = React.useState('');
  const [friendslist, setFriendsList] = React.useState([]);
  const arrayFriendsList = JSON.parse(localStorage.getItem("friendslist")); // will add this line once database is up
  console.log(friendName);


  async function addFriend(friendName) {
    // console.log(JSON.parse(localStorage.getItem("friendslist")));
    // await setFriendsList(JSON.parse(localStorage.getItem("friendslist")));
    // console.log(friendslist);
    if (arrayFriendsList.length==0) {
      setFriendsList([])
    }
    const index = arrayFriendsList.indexOf(friendName);
    if (index < 0) { // only execute code if the friend is not in the friend's list already
     arrayFriendsList.push(friendName);
      // console.log(`DEBUG: ` + arrayFriendsList);
      localStorage.setItem("friendslist", JSON.stringify(arrayFriendsList));
    }
  }

  async function removeFriend(friendName) { 
    const index = arrayFriendsList.indexOf(friendName);
    if (index > -1) { // only splice array when item is found
      arrayFriendsList.splice(index, 1); // 2nd parameter means remove one item only
      localStorage.setItem("friendslist", JSON.stringify(arrayFriendsList)); 
    }
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