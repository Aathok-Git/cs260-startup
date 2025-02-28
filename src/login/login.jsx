import React from 'react';
import "../styles.css";


import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';

export function Login({ userName, authState, onAuthChange } ) {
    return (
        <main>
            {authState !== AuthState.Unknown && <h1>Welcome to Wordle Scoreboard!</h1>}
            {authState === AuthState.Authenticated && (
                <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
            )}
            {authState === AuthState.Unauthenticated && (
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                />
            )}
        </main>
    );
}


// <div className="login">
//               <h2 className="login-header">Log in</h2>
//               <form className="login-container" method="get" action="main.html">
//               <div>
//                 <span>User:</span><input type="text" placeholder="Enter Your Username" />
//               </div>
//               <div>
//                 <span>Password:</span>
//                 <input type="password" placeholder="Password" />
//               </div>
//               <div><button type="submit">Login</button></div>
//             </form></div>