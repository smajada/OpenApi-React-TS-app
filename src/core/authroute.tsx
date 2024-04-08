import React from 'react';
import { Route, RouteProps, useNavigate } from 'react-router-dom';
import { AuthContext } from '../core';

export const AuthRouteComponent: React.FunctionComponent<RouteProps> = (props) => {
    const { userInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!userInfo) {
            navigate('/');
        }
    }, [props?.location?.pathname]);

    return <Route {...props} />;
};
