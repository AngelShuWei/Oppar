import './AllLikes.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect, useState} from 'react';
import { getAllLikes } from '../../store/likes';

function AllLikes() {
  const dispatch = useDispatch();
  const allLikes = useSelector(state => Object.values(state.likes));

  useEffect(() => {
    dispatch(getAllLikes());
  }, [dispatch]);

  return (
    <div className='all-likes-page-container'>
      <div className='all-img-likes-container'>
        {allLikes.map(like =>
          <div className='one-img-like-container' key={like.id}>
            <Link to={`/photos/${like.Photo.id}`}>
              <img className='like-photo' src={like.Photo.imageUrl}/>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllLikes;
