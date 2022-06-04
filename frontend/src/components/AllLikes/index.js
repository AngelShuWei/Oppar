import './AllLikes.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect, useState} from 'react';
import { deleteLike, getAllLikes } from '../../store/likes';

function AllLikes() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const allLikes = useSelector(state => Object.values(state.likes));

  // useEffect(() => {
  //   dispatch(getAllLikes());
  // }, [dispatch]);

  if (!sessionUser) return (
    <Redirect to='/'/>
    )

  const oneLike = allLikes.filter(like => like.userId === sessionUser.id);


  return (
    <div className='all-likes-page-container'>
      <div className='all-img-likes-container'>
        {oneLike.map(like =>
          <div className='one-img-like-container' key={like.id}>
            <div className='fa-lg fa-solid fa-heart' id='love' onClick={() => dispatch(deleteLike(like.id))}/>
            <Link to={`/photos/${like?.Photo?.id}`}>
              <img className='like-photo' src={like?.Photo?.imageUrl}/>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllLikes;
