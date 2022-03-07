import React from 'react';
import logo from '../../assets/opparlogo3.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({isLoaded}) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) { //if there is a sessionUser
    sessionLinks = (
      <ProfileButton user={sessionUser} /> //only render the profile Button when there is a session user
    );
  } else { //else have these links in the navbar instead
    sessionLinks = (
      <span className='button-container'>
        <NavLink className='button-container login-button' to="/login">Log In</NavLink>
        <NavLink className='button-container signup-button' to="/signup">Sign Up</NavLink>
      </span>

    );
  }

  return (
    <nav className='navbar-container'>
      <div className='logo-container'>
        <img src={logo} alt='opparlogo' style={{width:'80px'}}/>
        <NavLink exact to="/"/>
      </div>
        {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
