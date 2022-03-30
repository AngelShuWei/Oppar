import './AllPhotos.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Link } from 'react-router-dom';
import * as photosActions from '../../store/photos'

function AllPhotos() {
  const dispatch = useDispatch();

  const allPhotos = useSelector(state => Object.values(state.photos));
  // console.log(allPhotos);  //[{…}, {…}, {…}] => 0: {id: 1, title: 'Cha Eun Woo', userId: 1, albumId: null, imageUrl: 'https://wiki.d-addicts.com/images/thumb/9/9b/Cha_Eun_Woo.jpg/291px-Cha_Eun_Woo.jpg', …}

  useEffect(() => {
    dispatch(photosActions.getAllPhotos());
  }, [dispatch])

  return (
    <div className='all-photos-page-container'>
      <div className='photos-container'>
        {allPhotos.map(photo =>
          <div key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              <img className='photo' src={photo.imageUrl} alt={photo.title}/>
            </Link>
            {/* <p className='photo-text'>{photo.content}</p> */}
          </div>
        )}
      </div>
    </div>
  )
};

export default AllPhotos;
