import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import * as photosActions from '../../store/photos'

function AllPhotos() {
  const dispatch = useDispatch();

  const allPhotos = useSelector(state => Object.values(state.photo));
  console.log(allPhotos);

  useEffect(() => {
    dispatch(photosActions.getAllPhotos())
  }, [dispatch])

  return (
    <div>
      <ul>
        {allPhotos.map(photo => (<img src={photo.imageUrl} alt={photo.title} key={photo.id}/>))}
      </ul>
    </div>
  )
};

export default AllPhotos;
