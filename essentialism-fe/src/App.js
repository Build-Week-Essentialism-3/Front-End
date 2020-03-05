import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavWithAuth from './routes/routesWithAuth'
import NavNoAuth from './routes/navNoAuth';

//temporarily adding values page component
import ValuesPage from "./components/ValuesPage";
import Projects from "./components/Projects";
import Compare from "./components/Compare";


function App() {
  return (
    <Router>
      <div className="App">
        <NavNoAuth/>
        <NavWithAuth/>
        <Route path="/projects" component={Projects}/>
      </div>
     </Router>
  );
}

export default App;
