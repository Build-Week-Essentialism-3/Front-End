import React from 'react'

import UserHome from '../components/userHome';
import Compare from '../components/Compare';
import PrivateRouteUser from '../components/PrivateRouteUser';



const RoutesWithAuth = () => {
    return (
        <>
     
        <PrivateRouteUser exact path='/userHome' component={UserHome}/>

        <PrivateRouteUser exact path='/userCompare' component={Compare}/> 


      
       
        
        
        
        </>
    
    )
}

export default RoutesWithAuth