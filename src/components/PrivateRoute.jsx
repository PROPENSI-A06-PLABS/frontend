import axios from "axios";
import { useState } from "react";
import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children }) => {
    const token = localStorage.getItem("token")
    const { decodedToken, isExpired } = useJwt(token);
    // const [validateToken, setValidateToken] = useState(null);
    let validateToken = false;

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // axios.get('/validate', { headers: {"Authorization" : 'Bearer ' + token} }).then((response) => {
    //     // return children;
    //     // setValidateToken(true)
    //     console.log(response);
    //     validateToken = true;
    // })

    // if (validateToken == false) {
    //     // return children;
    //     return <Navigate to="/login" replace />;
    // }
    // // return <Navigate to="/login" replace />;
    // return children;

    console.log(decodedToken);
    if (isExpired) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default PrivateRoute;