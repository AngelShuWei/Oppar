import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import AllPhotos from '../AllPhotos';

function UserHomepage() {

  return (
    <div>
      <h1>hello🖼️</h1>
      <AllPhotos />
    </div>
  )
};

export default UserHomepage;
