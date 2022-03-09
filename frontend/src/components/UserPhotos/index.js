import { NavLink, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditDeleteButton from './EditDeleteButton';

function UserPhotos({sessionUser, photos}) {
  const userPhotos = photos.filter(photo => photo.userId === sessionUser.id) //renders all the photos specific to that user

  return (
    <div>
      {userPhotos.map(photo => (
        <div key={photo.id}>
          <Link to={`/photos/${photo.id}`}><img src={photo.imageUrl} alt={photo.title}/></Link>
          <EditDeleteButton photo={photo}/>
        </div>
      ))}
    </div>
  )
}

export default UserPhotos;
