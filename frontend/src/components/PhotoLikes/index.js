import './PhotoLikes.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createLike, deleteLike, getAllLikes } from '../../store/likes';

function PhotoLikes() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const allLikes = useSelector(state => Object.values(state.likes));
  const { photoId } = useParams();

  useEffect(() => {
    dispatch(getAllLikes());
  }, [dispatch]);

  const handleClick = async(e, photoId) => {
    e.preventDefault();
    const photoLike = allLikes.filter(like => sessionUser.id === like.userId && photoId === like.photoId);

    if (photoLike.length) {
      await dispatch(deleteLike(photoLike[0].id))
    } else {
      await dispatch(createLike({ photoId }))
    }
  };

  return (
    <>
      <i className="fa-lg fa-regular fa-heart" onClick={e => handleClick(e, photoId)}/>
    </>
  )
}

export default PhotoLikes;
