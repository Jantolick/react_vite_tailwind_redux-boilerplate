import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { store } from './redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Layout_Main from './components/layouts/Layout_Main';
import { gameStart } from './js/gameLogic';

const DefaultApp = () => {
  const [count, setCount] = useState(0);  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>Hello Vite + React!</p>
        <p>
          <button className="btn btn-primary"
            onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>

        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

function App() {

  useEffect(() => {
    document.addEventListener('gameEngine', e => {            
        console.log('Subscribed in App.');
    });
}, []);

  useEffect(() => {
    gameStart();
  }, []);

  return (
    <Provider store={store}>
      <Layout_Main />
    </Provider>
  )
}

export default App
