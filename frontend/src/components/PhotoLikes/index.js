import './PhotoLikes.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createLike, deleteLike, getAllLikes } from '../../store/likes';

function PhotoLikes() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const allLikes = useSelector(state => Object.values(state.likes));
  const userPhotoLike = allLikes.filter(like => (sessionUser.id === like.userId && +photoId === like.photoId));

  useEffect(() => {
    dispatch(getAllLikes());
  }, [dispatch]);

  const handleClick = async(e, photoId) => {
    e.preventDefault();
    
    if (userPhotoLike.length) {
      await dispatch(deleteLike(userPhotoLike[0].id))
    } else {
      await dispatch(createLike({ photoId }))
    }
  };

  return (
    <div>
      {userPhotoLike.length ?
        <i className="fa-lg fa-solid fa-heart" onClick={e => handleClick(e, photoId)}/> :
        <i className="fa-lg fa-regular fa-heart" onClick={e => handleClick(e, photoId)}/>
      }
    </div>
  )
}

export default PhotoLikes;
