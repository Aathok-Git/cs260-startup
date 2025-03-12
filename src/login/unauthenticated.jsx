import React from 'react';
import "../styles.css";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    
    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }
    
    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }
    
    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ userName: userName, password: password, friendList: []}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) {
          localStorage.setItem('userName', userName);
          props.onLogin(userName);
        } else {
          const body = await response.json();
          console.error(body.msg);
        }
      }
    
    return (
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <div className="login-container">
            <div>
                <span>User:</span><input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Your Username" />
            </div>
             <div>
                <span>Password:</span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div><button type="submit" onClick={() => loginUser()} disabled={!userName || !password}>Login</button></div>
            <div><button type="submit" onClick={() => createUser()} disabled={!userName || !password}>Create</button></div>
            </div></div>
     )

}