import React from 'react';

export function unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
    
    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }
    
    async function createUser() {
       localStorage.setItem('userName', userName);
       props.onLogin(userName);
    }
    
    return (
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <form className="login-container" method="get" action="main.html">
            <div>
                <span>User:</span><input type="text" placeholder="Enter Your Username" />
            </div>
             <div>
                <span>Password:</span>
                <input type="password" placeholder="Password" />
            </div>
            <div><button type="submit">Login</button></div>
            </form></div>
     )

}