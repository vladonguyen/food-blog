import '../nav-menu/navmenu.css';

import { useContext } from 'react';
import { NavLink, Link} from 'react-router-dom';
import AuthContext from '../../../context/authContext';

export default function NavMenu() {
  const {
    isAuthenticated,
    username,
  } = useContext(AuthContext);


  function responsiveMenuClick() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (

    <div className="topnav" id="myTopnav">
      <Link  className="nav-brand" to="/">
        <img className='logo-header' src="/img/core-img/pizza.png" alt="pizza" />
      </Link >
      <NavLink  to="/">
        Home
      </NavLink >
      <NavLink   to="/about">About us</NavLink  >
      <NavLink  to="/blog">Blog</NavLink >
      <NavLink  to="/rezepte">Recipes</NavLink >
      {isAuthenticated && (
        <> <div className="dropdown">
          <button className="dropbtn">
            Create
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <NavLink  to="/blog/create">Create post</NavLink >
            <NavLink  to="/rezepte/create">Create receipe</NavLink >
          </div>
        </div>
        </>
      )}
      {!isAuthenticated && (   <>
      <NavLink  to="/login">Login</NavLink >
      <NavLink  to="/register">Register</NavLink >
      </>
      )}
       {isAuthenticated && (
        <>

      <div className="dropdown">
            <button className="dropbtn">
            |Hi,   {username}
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink  to="/blog/my">My blog posts</NavLink >
              <NavLink  to="/rezepte/my">My recipes</NavLink >
              <NavLink  to="/logout">Logout</NavLink >
            </div>
          </div>
       
      </>
      )}
      <NavLink  to="" className="icon" onClick={responsiveMenuClick}>
        &#9776;
      </NavLink >
    </div>
  )
}