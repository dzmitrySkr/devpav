import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router"



const ProtectedRoute = ({ children }) => {
    let localstore =  localStorage.getItem('token');
    
    if (localstore) {
      return <Navigate to = 'main' replace/> 
    }
    return children;
  };


  export default ProtectedRoute