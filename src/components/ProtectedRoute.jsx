import React from 'react'
import {useAuth} from '../auth/AuthProvider'
import { Navigate , Outlet } from 'react-router'
export default function ProtectedRoute() {
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated) {
      return <Navigate to="/login" />
    }
    return <Outlet />;

}
