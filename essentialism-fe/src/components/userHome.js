import React from 'react';
// import {Route} from 'react-router-dom';
import ValuesPage from './ValuesPage';
import {Link, Route} from 'react-router-dom';
import "../App.css";


                                                                


const UserHome = () => {
    return (
        <div className='Nav-with-auth'>
            <Link class="inlineNav" to='/projects'>Projects</Link>
            <ValuesPage/>
        </div>

        
            
            

    )
}


export default UserHome