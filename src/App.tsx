import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { io, Socket } from 'socket.io-client';

const socket: Socket = io('https://localhost:4430');

function App() {
    useEffect(() => {
        socket.on('connect', () => console.log('Connected'));
        socket.on('data', console.log);
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
