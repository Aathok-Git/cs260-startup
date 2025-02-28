import React from 'react';
import "../styles.css";


export function Authenticated() {

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
      }

    return (
        <div className='login'>
            <h2 className="login-header">Click below to log out</h2>
            <div className='login-container'>
            <div><button type="submit" onClick={() => logout()}>Log out</button></div>
            </div>
        </div>
    )
}