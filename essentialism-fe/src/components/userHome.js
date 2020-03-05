import React from 'react';
import ValuesPage from './ValuesPage';
import {Link, Route} from 'react-router-dom';
import Projects from '../components/Projects';


                                                                


const UserHome = () => {
    return (
        <div className='Nav-with-auth'>
        <Link class="inlineNav" to='/projects'>Projects</Link>
        <ValuesPage/>
        
    </div>

        
            
            

    )
}


export default UserHome