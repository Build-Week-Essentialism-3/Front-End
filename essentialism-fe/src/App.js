import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavWithAuth from './routes/routesWithAuth'
import NavNoAuth from './routes/navNoAuth';



function App() {
  return (
    <Router>
      <div className="App">
        <h1>Essentialism</h1>
        <NavNoAuth/>
        <NavWithAuth/>
      </div>
     </Router>
  );
}

export default App;
