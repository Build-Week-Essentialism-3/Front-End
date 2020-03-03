import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import ValuesPage from './components/ValuesPage';
import Projects from './components/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
 
    <Register/>
    <Login/>
    <ValuesPage/>
    <Projects/>
    </div>
  );
}

export default App;
