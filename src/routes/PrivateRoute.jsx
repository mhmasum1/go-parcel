import React, { Children } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ Children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if (!user) {
        return <Navigate to="login"></Navigate>
    }

    return Children;
};

export default PrivateRoute;