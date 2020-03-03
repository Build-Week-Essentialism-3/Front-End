import React from 'react'

import UserHome from '../components/userHome';
import PrivateRouteUser from '../components/PrivateRouteUser';



const RoutesWithAuth = () => {
    return (
        <>
     
        <PrivateRouteUser exact path='/userHome' component={UserHome}/> 


      
       
        
        
        
        </>
    
    )
}

export default RoutesWithAuth