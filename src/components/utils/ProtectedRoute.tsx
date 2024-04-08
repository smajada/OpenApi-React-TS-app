import { Navigate, Outlet } from 'react-router-dom';

type Props = {
    canActivate: boolean;
    redirectPath?: string;
};

const ProtectedRoute = ({ canActivate, redirectPath = '/login' }: Props) => {
    if (!canActivate) {
        return <Navigate to={redirectPath} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
