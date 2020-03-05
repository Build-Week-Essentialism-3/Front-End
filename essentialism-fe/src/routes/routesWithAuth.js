import React from 'react'

import UserHome from '../components/userHome';
import PrivateRouteUser from '../components/PrivateRouteUser';
import Projects from '../components/Projects';


const RoutesWithAuth = () => {
    return (
        <>
            <PrivateRouteUser exact path='/userHome' component={UserHome}/> 
            <PrivateRouteUser exact path='/projects' component={Projects}/>
        </>
    
    )
}

export default RoutesWithAuth