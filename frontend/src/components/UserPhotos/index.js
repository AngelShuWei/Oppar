import './UserPhotos.css'
import flowerBackground from '../../assets/flower.png'
import { NavLink, Route, Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditDeleteButton from './EditDeleteButton';

function UserPhotos({photos}) {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const userPhotos = photos.filter(photo => photo.userId === sessionUser.id) //renders all the photos specific to that user

  return (
    <div className='user-photos-page-container'>
      <img className='flower-background' src={flowerBackground} alt='flower'/>
        <div className='lower-page-container'>
          {userPhotos.map(photo => (
            <div className='user-photos-container' key={photo.id}>
              <Link className='user-photo-link' to={`/photos/${photo.id}`}>
                <img className='user-photo' src={photo.imageUrl} alt={photo.title}/>
              </Link>
              <div className='edit-delete-button'>
                <EditDeleteButton className='edit-delete-button' photo={photo}/>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default UserPhotos;
