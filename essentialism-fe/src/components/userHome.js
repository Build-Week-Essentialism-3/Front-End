import React from 'react';
import {Route} from 'react-router-dom';
import ValuesPage from './ValuesPage';
import {Link} from 'react-router-dom';





const UserHome = () => {
    return (
        <>
           <div className='Nav-with-auth'>
            <Link to='/valuesSelect'>Select and Add Values</Link>
            </div>

        <Route path='/valuesSelect'>
            <ValuesPage/>
        </Route>
        
        
        </>
    )
}


export default UserHome