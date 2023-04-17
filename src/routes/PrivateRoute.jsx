import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, lodding}= useContext(AuthContext);
    const location =useLocation();
    console.log(location);

    if(lodding){
        return <div>Lodding....</div>
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;