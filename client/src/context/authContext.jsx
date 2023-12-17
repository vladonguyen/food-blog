import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom'



import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";


const AuthContext = createContext() ;
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const [isLoginError, setLoginError] = useState(false);
    const [isCreateBlogError, setCreateBlogError] = useState(false);

  
    const loginSubmitHandler = async (values) => {
      
      try {
      setLoginError(false);
      const result = await authService.login(values.email, values.password);
      
      
      setAuth(result);
      // localStorage.setItem('accessToken', result.accessToken);
      navigate(Path.Home)

      } catch (error) {
        setLoginError(JSON.parse(error.message))
       return error

      }
      
    }

    const [isRegError, setRegError] = useState(false);
  
    const registerSubmitHandler = async (values) => {
      try {
        setRegError(false);
        const result = await authService.register(values.email, values.username, values.password, values.confirmPassword);
        console.log(result,'registerSubmitHandler' );
      setAuth(result);
      // localStorage.setItem('accessToken', result.accessToken);
  
      navigate(Path.Home);
        
      } catch (error) {
        setRegError(error.message);
        return error

      }
      
    }
  
    const logoutHandler = () => { 

      setAuth({});
      // localStorage.removeItem('accessToken');
      
  
    }


  
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      username: auth.username || auth.email,
      email: auth.email,
      userId: auth._id,
      isAuthenticated: !!auth.accessToken,
      token: auth.accessToken,
      isLoginError,
      setLoginError,
      isRegError,
      setRegError,
      isCreateBlogError,
      setCreateBlogError
    }




    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;