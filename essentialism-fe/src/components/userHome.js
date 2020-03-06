import React from 'react';
import ValuesPage from './ValuesPage';
import {Link, Route} from 'react-router-dom';

import Projects from '../components/Projects';
import Compare from '../components/Compare';





                                                                


const UserHome = () => {
    return (
        <div className='Nav-with-auth'>

        <Link class="inlineNav" to='/projects'>Projects</Link>
        <ValuesPage/>
        
    </div>

            <Link to='/projects'>Projects</Link>

            <Link to='/userCompare'>Compare</Link>

            <Link to='/chooseTopThree'>Choose Your Top Three Values</Link>


        </div>


        
            
            

    )
}


export default UserHome