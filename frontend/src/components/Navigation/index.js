import './Navigation.css';
import React from 'react';
import logo from '../../assets/opparlogo3.png'
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import UploadButton from './UploadButton';
import PhotostreamButton from './PhotostreamButton';

function Navigation({isLoaded}) {
  const sessionUser = useSelector(state => state.session.user);
  if (!sessionUser) {
    <Redirect to='/'/>
  }

  let sessionLinks;
  if (sessionUser) { //if there is a sessionUser
    sessionLinks = ( //only render the profile Button when there is a session user
      <div>
        <PhotostreamButton/>
        <UploadButton/>
        <ProfileButton user={sessionUser} />
      </div>
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
        <NavLink exact to="/"><img src={logo} alt='opparlogo' style={{width:'80px'}}></img></NavLink>
      </div>
        {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
