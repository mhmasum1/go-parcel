import React, { Children } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ Children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log("location", location);


    if (loading) {
        return <div>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

    return Children;
};

export default PrivateRoute;