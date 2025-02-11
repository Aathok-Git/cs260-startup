import React from 'react';
import 'bootstrap/dist/css/boostrap.min.css';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';


export default function App() {
    return (
        <BrowserRouter>
        <header>
            <p>Welcome to Wordle with Friends!</p>
            <nav>
                <menu>
                    <span><a class="inline" href="index.html">Home & Login</a></span>
                    <span><a class="inline" href="InputScores.html">Input Scores</a></span>
                    <span><a class="inline" href="manage_friend.html">Manage Friends</a></span>
                    <span><a class="inline" href="disp_scores.html">View Scores</a></span>
                    <span><a class="inline" href="about.html">About</a></span>
                </menu>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/input-scores' element={<Input-Scores />} />
            <Route path='/manage-friends' element={<Manage-Freinds />} />
            <Route path='/scores' element={<Scores />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <span>Luke Martinez</span>
            <a href="https://github.com/Aathok-Git/cs260-startup">Github</a>
        </footer>
        </BrowserRouter>
    )
}