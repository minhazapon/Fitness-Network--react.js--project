import { useContext } from "react";
import { fireContext } from "../firebase/AuthContext";
import { Navigate } from "react-router-dom";


 

const PrivateRoute = ({children}) => {

 
    const {user, loading} = useContext(fireContext)

    if(loading){
     
        return  <span className=" ml-5 mr-5 mt-5 mb-5  loading loading-ring loading-lg"></span>

    }

    if(user){
      
        return children
 
    }

    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;