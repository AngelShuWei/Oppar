import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserPhotos({sessionUser, photos}) {
  const userPhotos = photos.filter(photo => photo.userId === sessionUser.id)

  return (
    <div>
      {userPhotos.map(photo => (<img src={photo.imageUrl} alt={photo.title} key={photo.id}/>))}
    </div>
  )
}

export default UserPhotos;
