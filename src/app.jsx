import React from 'react';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { InputScores } from './InputScores/InputScores';
import { Friends } from './Friends/manage_friend'
import { Scores } from './Scores/disp_scores';
import { About } from './About/about';
import { AuthState } from './login/authState';
import { Players } from './players';


export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
        <header>
            <p>Wordle with Friends!</p>
            <nav>
                <menu>
                    <span><NavLink className="inline" to="">Home & Login</NavLink></span>
                    {authState === AuthState.Authenticated && (
                    <span><NavLink className="inline" to="InputScores">Input Scores</NavLink></span>
                    )}
                    {authState === AuthState.Authenticated && (
                    <span><NavLink className="inline" to="Friends">Manage Friends</NavLink></span>
                    )}
                    {authState === AuthState.Authenticated && (
                    <span><NavLink className="inline" to="Scores">View Scores</NavLink></span>
                    )}
                    <span><NavLink className="inline" to="about">About</NavLink></span>
                </menu>
            </nav>
        </header>

        <div className="users">
            Currently logged in as: 
            <span className="user-name">{userName? userName: "Not logged in"}</span>
        </div>
        
        <Routes>
            <Route path='/' element={<Login 
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}/>} exact />
            <Route path='/inputscores' element={<InputScores userName={userName} />} />
            <Route path='/Friends' element={<Friends userName={userName}/>} />
            <Route path='/Scores' element={<Scores userName={userName}/>} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <span>Luke Martinez</span>
            <NavLink to="https://github.com/Aathok-Git/cs260-startup">Github</NavLink>
        </footer>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }