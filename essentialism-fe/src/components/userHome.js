import React from 'react';
import ValuesPage from './ValuesPage';
import {Link, Route} from 'react-router-dom';



                                                                


const UserHome = () => {
    return (
        <div className='Nav-with-auth'>

        <Link class="inlineNav" to='/projects'>Projects</Link>
        <ValuesPage/>
        
    </div>

            <Link to='/projects'>Projects</Link>
            <Link to='/chooseTopThree'>Choose Your Top Three Values</Link>
            <ValuesPage/>
        </div>


        
            
            

    )
}


export default UserHome