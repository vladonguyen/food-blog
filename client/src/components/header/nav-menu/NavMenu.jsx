import '../nav-menu/navmenu.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      <Link className="nav-brand" to="/">
        <img className='logo-header' src="img/core-img/pancake.png" alt="" />
      </Link>
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/about">About us</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/rezepte">Recipes</Link>
      {isAuthenticated && (
        <> <div className="dropdown">
          <button className="dropbtn">
            Create
            <i className="fa fa-caret-down" />
          </button>
          <div className="dropdown-content">
            <Link to="/blog/create">Create post</Link>
            <Link to="/rezepte/create">Create receipe</Link>
          </div>
        </div>
        </>
      )}
      {!isAuthenticated && (   <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
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
              <Link to="/blog/my">My blog posts</Link>
              <Link to="/rezepte/my">My recipes</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div>
       
      </>
      )}
      <Link to="" className="icon" onClick={responsiveMenuClick}>
        &#9776;
      </Link>
    </div>
  )
}