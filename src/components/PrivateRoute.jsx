import axios from "axios";
import { useState } from "react";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children }) => {
    const token = localStorage.getItem("token")
    const { decodedToken, isExpired } = useJwt(token);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    console.log(decodedToken);
    if (isExpired) {
        return <Navigate to="/login" replace />;
    }
    //refresh jika token sisa brp menit
    return children;
};

export default PrivateRoute;