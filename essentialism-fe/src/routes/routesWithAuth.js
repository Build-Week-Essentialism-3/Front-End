import React from 'react'
import {Route} from 'react-router-dom';
import UserHome from '../components/userHome';
import Compare from '../components/Compare';
import PrivateRouteUser from '../components/PrivateRouteUser';

import Projects from '../components/Projects';

import TopThree from '../components/TopThree';





const RoutesWithAuth = () => {
    return (
        <>

            <PrivateRouteUser exact path='/userHome' component={UserHome}/> 
            <PrivateRouteUser exact path='/projects' component={Projects}/>

     
        {/* <PrivateRouteUser exact path='/userHome' component={UserHome}/> */}

        <PrivateRouteUser exact path='/userCompare' component={Compare}/> 

        <Route path = '/chooseTopThree'>
            <TopThree/>
        </Route>
      
       
        
        
        

        </>
    
    )
}

export default RoutesWithAuth