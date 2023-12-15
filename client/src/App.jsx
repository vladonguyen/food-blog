import '../public/style.css';

import { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as authService from './services/authService';
import AuthContext from './context/authContext';
import  {AuthProvider} from './context/authContext';

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
import AuthGuard from './components/guards/AuthGuards';
import BlogEdit from './components/blog-edit/BlogEdit';
import RezepteEdit from './components/rezepte-edit/RezepteEdit';
import BlogListMy from './components/blog-list/BlogListMy';
import RezepteListMy from './components/rezepte-list/RezepteListMy';








function App() {
 
  function clearLocalStorage(){
    let firstTime= 1;
    if(firstTime = 1){
        localStorage.removeItem('accessToken', 'auth');
        firstTime++;
    }
}

clearLocalStorage();


  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<BlogList />} />
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog/:blogId' element={<BlogDetails />} />
          <Route path='/rezepte' element={<RezepteList />} />
          <Route path='/rezepte/:rezepteId' element={<RezepteDetails />} />
          
          <Route element={<AuthGuard />}>
          <Route path='/blog/create' element={<BlogCreate />} />
<Route path={Path.BlogEdit} element={<BlogEdit />} />
<Route path='/rezepte/create' element={<RezepteCreate />} />
<Route path={Path.RezepteEdit} element={<RezepteEdit />} />
<Route path='/blog/my' element={<BlogListMy />} />
<Route path='/rezepte/my' element={<RezepteListMy />} />
          <Route path={Path.Logout} element={<Logout />} />
          </Route>
        </Routes>
        <Footer />

      </div>
      </AuthProvider >

  )
}

export default App
