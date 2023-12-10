import '../public/style.css';

import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as authService from './services/authService';
import AuthContext from './context/authContext';
import Path from "./paths";

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import BlogList from './components/blog-list/BlogList'
import BlogCreate from './components/blog-create/BlogCreate'
import Login from './components/login/Login'
import Logout from "./components/logout/Logout";
import Register from './components/register/Register'
import BlogDetails from './components/blog-details/BlogDetails'
import Footer from "./components/footer/Footer";
import RezepteDetails from './components/rezepte-details/RezepteDetails';
import RezepteCreate from './components/rezepte-create/RezepteCreate';
import RezepteList from './components/rezepte-list/RezepteList';







function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(()=>{
    localStorage.removeItem('accessToken');
    return {};
  });

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password);
    console.log(result);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate(Path.Home)
    } catch (error) {
      return alert(error.message);

    }
    
  }

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  }

  const logoutHandler = () => { 
    setAuth({});
    localStorage.removeItem('accessToken');
    

  }

  

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  }


  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<BlogList />} />
          <Route path='/blog/create' element={<BlogCreate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog/:blogId' element={<BlogDetails />} />
          <Route path='/rezepte' element={<RezepteList />} />
          <Route path='/rezepte/:rezepteId' element={<RezepteDetails />} />
          <Route path='/rezepte/create' element={<RezepteCreate />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
        <Footer />

      </div>
    </AuthContext.Provider >

  )
}

export default App
