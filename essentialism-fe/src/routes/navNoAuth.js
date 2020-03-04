import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import { Route } from "react-router-dom";






const NavBarNoAuth = () => {
    return (
        <>
        <div className='Nav-no-auth'>
            <Link to='/register'>Register</Link>
            <Link to ='/'>Login</Link>
        </div>
                <Route path='/register'
                   render={props => <Register {...props}/>} 
                />

                <Route exact path='/'
                render={props=> <Login {...props}/>}
                />
</>

    )
}

export default NavBarNoAuth