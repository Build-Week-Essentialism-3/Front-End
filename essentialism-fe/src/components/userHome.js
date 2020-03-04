import React from 'react';
// import {Route} from 'react-router-dom';
import ValuesPage from './ValuesPage';
import {Link} from 'react-router-dom';
import Projects from '../components/Projects';


                                                                


const UserHome = () => {
    return (
        <>
           <div className='Nav-with-auth'>
          
            </div>

        
            <ValuesPage/>
        

        <Projects/>
        
        
        </>
    )
}


export default UserHome