import React from 'react';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { InputScores } from './InputScores/InputScores';
import { Friends } from './Friends/manage_friend'
import { Scores } from './Scores/disp_scores';
import { About } from './about/about';


export default function App() {
    return (
        <BrowserRouter>
        <header>
            <p>Wordle with Friends!</p>
            <nav>
                <menu>
                    <span><NavLink className="inline" to="">Home & Login</NavLink></span>
                    <span><NavLink className="inline" to="InputScores">Input Scores</NavLink></span>
                    <span><NavLink className="inline" to="Friends">Manage Friends</NavLink></span>
                    <span><NavLink className="inline" to="Scores">View Scores</NavLink></span>
                    <span><NavLink className="inline" to="about">About</NavLink></span>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/inputscores' element={<InputScores />} />
            <Route path='/Friends' element={<Friends />} />
            <Route path='/Scores' element={<Scores />} />
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