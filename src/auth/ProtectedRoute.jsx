import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({components}) => {
  const { isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  useEffect(()=>{
    if(!isLoading && !isAuthenticated){
      navigate("/login")
    }


  },[isAuthenticated, isLoading, navigate])

 if(isLoading) return <div>Loading...</div>

  return isAuthenticated? components: null;
};

export default ProtectedRoute;
