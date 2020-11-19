import React from 'react';
import './App.css';

import{ Router, Link  } from '@reach/router';
import HomePage from './components/HomePage';
import NumPage from './components/NumPage';
import HelloPage from './components/HelloPage';
import ColorPage from './components/ColorPage'

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/home"/>
        <NumPage path="/num/:num" />
        <HelloPage path="/:anyWord" />
        <ColorPage path="/hello/:wordColor/:backColor" />

      </Router>

    </div>
  );
}

export default App;
