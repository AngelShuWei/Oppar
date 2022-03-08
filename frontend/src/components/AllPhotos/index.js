import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import * as photosActions from '../../store/photos'

function AllPhotos() {
  const dispatch = useDispatch();

  const allPhotos = useSelector(state => Object.values(state.photos));
  // console.log(allPhotos);  //[{…}, {…}, {…}] => 0: {id: 1, title: 'Cha Eun Woo', userId: 1, albumId: null, imageUrl: 'https://wiki.d-addicts.com/images/thumb/9/9b/Cha_Eun_Woo.jpg/291px-Cha_Eun_Woo.jpg', …}

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
