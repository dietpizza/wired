import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { io, Socket } from 'socket.io-client';

function App() {
    const [connect, setConnect] = useState(false);

    function onMount() {
        const socket: Socket = io('https://localhost:1337', {
            reconnectionDelayMax: 1000,
        });

        socket.on('connect', () => setConnect(true));
        socket.on('disconnect', () => setConnect(false));
        socket.on('data', console.log);
        return () => {
            socket.disconnect();
        };
    }

    useEffect(onMount, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={connect ? logo : ''} className="App-logo" alt="logo" />
                <p>{connect ? 'Connected!' : 'Disconnected!'}</p>
            </header>
        </div>
    );
}

export default App;
