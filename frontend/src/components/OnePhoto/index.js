import './OnePhoto.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect } from 'react';
import * as commentsActions from "../../store/comments";
import CommentFormPage from '../CommentFormPage';

function OnePhoto() {
  const dispatch = useDispatch();

  const { photoId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId

  const allComments = useSelector(state => Object.values(state.comments).filter(comment => {
    return comment.photoId === parseInt(photoId, 10);
  }));

  return (
    <>
      <div className='one-photo-page-container'>
          <img className='one-photo-container' src={photoDetails.imageUrl} alt={photoDetails.title}/>
        <div className='content-container'></div>
      </div>
        <div className='content-container'>
          {/* <div className='photo-details-username'>By: {sessionUser.username}</div> */}
          <div className='photo-details-title'>{photoDetails.title}</div>
          <div>{photoDetails.content}</div>
      </div>
      <div className='comments-container'>
        {allComments.map(comment =>
          <div key={comment.id}>
            <p>{comment.comment}</p>
          </div>
        )}
        <CommentFormPage/>
        <p>Enter a comment</p>
      </div>
    </>
  )
}

export default OnePhoto;
