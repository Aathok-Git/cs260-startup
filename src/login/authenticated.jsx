import React from 'react';
import "../styles.css";


export function Authenticated(props) {

    function logout() {
        fetch(`/api/auth/logout`, {
          method: 'delete',
        })
            .catch(() => {
                // Logout failed. Assuming offline
            })
            .finally(() => {
                localStorage.removeItem('userName');
                props.onLogout();
                
            });
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