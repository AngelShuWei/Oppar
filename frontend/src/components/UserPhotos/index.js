import './UserPhotos.css'
import { NavLink, Route, Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditDeleteButton from './EditDeleteButton';

function UserPhotos({photos}) {
  const sessionUser = useSelector((state) => state.session.user);
  const userPhotos = photos.filter(photo => photo.userId === sessionUser.id) //renders all the photos specific to that user

  if (!sessionUser) {
    <Redirect to='/'/>
  }

  return (
    <div className='user-photos-page-container'>
      {userPhotos.map(photo => (
        <div className='user-photos-container' key={photo.id}>
          <Link to={`/photos/${photo.id}`}><img className='user-photo-container' src={photo.imageUrl} alt={photo.title}/></Link>
          <EditDeleteButton photo={photo}/>
        </div>
      ))}
    </div>
  )
}

export default UserPhotos;
