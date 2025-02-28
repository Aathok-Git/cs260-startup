import React from 'react';
import "../styles.css";

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    
    async function loginUser() {
        localStorage.setItem('userName', userName, "times_submitted", 0);
        props.onLogin(userName);
    }
    
    async function createUser() {
        localStorage.setItem('userName', userName, "times_submitted", 0);
        props.onLogin(userName);
    }
    
    return (
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <form className="login-container" method="get" action="main.html">
            <div>
                <span>User:</span><input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Your Username" />
            </div>
             <div>
                <span>Password:</span>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div><button type="submit" onClick={() => loginUser()} disabled={!userName || !password}>Login</button></div>
            <div><button type="submit" onClick={() => createUser()} disabled={!userName || !password}>Create</button></div>
            </form></div>
     )

}