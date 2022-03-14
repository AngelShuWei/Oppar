import './Navigation.css';
import React from 'react';
import logo from '../../assets/opparlogo3.png'
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({isLoaded}) {
  const sessionUser = useSelector(state => state.session.user);
  if (!sessionUser) {
    <Redirect to='/'/>
  }
  let styleChanges;
  let sessionLinks;
  if (sessionUser) { //if there is a sessionUser
    sessionLinks = ( //only render the profile Button when there is a session user
      <div className='nav-button-container'>
        <div className='nav-left-buttons'>
        <NavLink to='/photos'>
          <button className='nav-button'>Photostream</button>
        </NavLink>
        <NavLink to='/albums'>
          <button className='nav-button'>Albums</button>
        </NavLink>
        </div>
        <div className='nav-right-buttons'>
        <NavLink to='/upload'>
          <button className='nav-button'>
            <i className="fa-lg fa-solid fa-upload"></i>
          </button>
        </NavLink>
        <ProfileButton user={sessionUser} />
        </div>
      </div>
    );
    styleChanges = {
      backgroundColor: "#212124",
      height: "20px"
    }
  } else { //else have these links in the navbar instead
    sessionLinks = (
      <span className='button-container'>
        <NavLink className='button-container login-button' to="/login">Log In</NavLink>
        <NavLink className='button-container signup-button' to="/signup">Sign Up</NavLink>
      </span>

    );
  }

  return (
    <nav className='navbar-container' style={styleChanges}>
      <div className='logo-container'>
        <NavLink exact to="/"><img src={logo} alt='opparlogo' style={{width:'80px'}}></img></NavLink>
      </div>
        {isLoaded && sessionLinks}
    </nav>
  );
}

export default Navigation;
