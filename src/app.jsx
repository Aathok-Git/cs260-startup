import React from 'react';
import 'bootstrap/dist/css/boostrap.min.css';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { InputScores } from './InputScores/inputscores';
import { Friends } from './Friends/Friends'
import { Scores } from './Scores/scores';
import { About } from './about/about';


export default function App() {
    return (
        <BrowserRouter>
        <header>
            <p>Wordle with Friends!</p>
            <nav>
                <menu>
                    <span><NavLink className="inline" to="index">Home & Login</NavLink></span>
                    <span><NavLink className="inline" to="InputScores">Input Scores</NavLink></span>
                    <span><NavLink className="inline" to="manage_friend">Manage Friends</NavLink></span>
                    <span><NavLink className="inline" to="disp_scores">View Scores</NavLink></span>
                    <span><NavLink className="inline" to="about">About</NavLink></span>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/input-scores' element={<InputScores />} />
            <Route path='/manage-friends' element={<Friends />} />
            <Route path='/scores' element={<Scores />} />
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