import React from 'react';




import Projects from './components/Projects';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import NavWithAuth from './routes/routesWithAuth'

import NavNoAuth from './routes/navNoAuth';

//temporarily adding values page component
import ValuesPage from "./components/ValuesPage";


function App() {
  return (
    <Router>

    <div className="App">

    

   <NavNoAuth/>
   <NavWithAuth/>




 
 
   <Projects/>
   {/*temporarily adding ValuesPage component to console log */}
    <ValuesPage/>
    </div>
    
    </Router>
  );
}

export default App;
