import React from 'react';
// import {Route} from 'react-router-dom';
import ValuesPage from './ValuesPage';
import {Link, Route} from 'react-router-dom';
import Projects from '../components/Projects';


                                                                


const UserHome = () => {
    return (
        <div className='Nav-with-auth'>
            <Link to='/projects'>Projects</Link>
            <ValuesPage/>
        </div>

        
            
            

    )
}


export default UserHome