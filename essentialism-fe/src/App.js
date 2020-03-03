import React from 'react';




import Projects from './components/Projects';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import NavWithAuth from './routes/routesWithAuth'

import NavNoAuth from './routes/navNoAuth';




function App() {
  return (
    <Router>

    <div className="App">

    

   <NavNoAuth/>
   <NavWithAuth/>




 
 
    <Projects/>

    </div>
    
    </Router>
  );
}

export default App;
