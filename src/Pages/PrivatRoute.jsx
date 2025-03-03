/* eslint-disable react/prop-types */
import AuthContext from "@/provider/AuthContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";

const PrivatRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(user){
        return children
    }
    if(loading){
        return <p className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-cyan-400 text-center">Loading</p>
    }
    return (
        <Navigate to={"/login"} state={location?.pathname}>
            
        </Navigate>
    );
};

export default PrivatRoute;