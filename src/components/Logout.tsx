import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
    useEffect(() => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }, []);
    return <Navigate to="/" />;
};
export default Logout;
