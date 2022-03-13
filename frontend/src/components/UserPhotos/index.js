import './UserPhotos.css'
import flowerBackground from '../../assets/flower.png'
import { NavLink, Route, Link, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditDeleteButton from './EditDeleteButton';

function UserPhotos() {
  const sessionUser = useSelector((state) => state.session.user);
  const photos = useSelector(state => Object.values(state.photos));

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const userPhotos = photos.filter(photo => photo.userId === sessionUser.id); //renders all the photos specific to that user

  return (
    <>
      <img className='flower-background' src={flowerBackground} alt='flower'/>
        <div className='user-photos-page-container'>
          <div className='user-photos-container'>
            {userPhotos.map(photo => (
              <div className='photos-info' key={photo.id}>
                <Link className='user-photo-link' to={`/photos/${photo.id}`}>
                  <img className='user-photo' src={photo.imageUrl} alt={photo.title}/>
                </Link>
                  <EditDeleteButton photo={photo}/>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default UserPhotos;
