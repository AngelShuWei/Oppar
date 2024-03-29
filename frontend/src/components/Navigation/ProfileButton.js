import './Navigation.css'
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({user}) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className='nav-button' onClick= {openMenu}>
        <i className= "fa-lg fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <h3>Welcome, {user.username}!</h3>
          {/* <p>{user.email}</p> */}
          <button className='logout-button' onClick={logout}>Log Out</button>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
