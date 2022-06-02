import './AllPhotos.css'
import tack from '../../assets/tack.png'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Link } from 'react-router-dom';
import * as photosActions from '../../store/photos'

function AllPhotos() {
  const dispatch = useDispatch();

  const allPhotos = useSelector(state => Object.values(state.photos));
  const allPhotoLikes = useSelector(state => Object.values(state.likes));

  useEffect(() => {
    dispatch(photosActions.getAllPhotos());
  }, [dispatch])

  return (
    <div className='all-photos-page-container'>
      <div className='photos-container'>
        {allPhotos.map(photo =>
          <div className='photo-container' key={photo.id}>
            <Link to={`/photos/${photo.id}`}>
              {/* <img className='tack' src={tack}/> */}
              <div className='photo-card-top'>
                <img className='photo' src={photo.imageUrl} alt={photo.title}/>
              </div>
              <div className='photo-card-bottom'>
                <div className='photo-card-love'>
                  <span className='photo-love-count' id='photo'>{photo.Likes.length}</span>
                  <span className='fa-lg fa-solid fa-heart' id='photo'/>
                </div>
                <div className='photo-text'>{photo.content}</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
};

export default AllPhotos;
