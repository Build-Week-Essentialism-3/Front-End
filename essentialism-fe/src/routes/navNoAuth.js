import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import { Route } from "react-router-dom";
import "../App.css";





const NavBarNoAuth = () => {
    return (
        <>
        <div className='Nav-no-auth'>
            <Link class="inlineNav" to='/register'>Register</Link>{" "}
            <Link class="inlineNav" to ='/'>Login</Link>{" "}
        </div>
            <Route path='/register' render={props => <Register {...props}/>}/>
            <Route exact path='/' render={props=> <Login {...props}/>}/>
</>

    )
}

export default NavBarNoAuth