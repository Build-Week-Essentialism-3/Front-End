import React from 'react'
import {Route} from 'react-router-dom';
import UserHome from '../components/userHome';
import PrivateRouteUser from '../components/PrivateRouteUser';
import TopThree from '../components/TopThree';




const RoutesWithAuth = () => {
    return (
        <>
     
        <PrivateRouteUser exact path='/userHome' component={UserHome}/> 

        <Route path = '/chooseTopThree'>
            <TopThree/>
        </Route>
      
       
        
        
        
        </>
    
    )
}

export default RoutesWithAuth