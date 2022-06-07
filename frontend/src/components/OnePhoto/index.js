import './OnePhoto.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect, useState} from 'react';
import * as commentsActions from "../../store/comments";
import CommentFormPage from '../CommentFormPage';
import EditDeleteButton from './EditDeleteButton';
import LikeButton from '../PhotoLikes';

function OnePhoto() {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const [showComment, setShowComment] = useState(true);
  const [commentId, setCommentId] = useState(-1);
  const sessionUser = useSelector(state => state.session.user);
  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId
  const allComments = useSelector(state => Object.values(state.comments).filter(comment => {
    return comment.photoId === parseInt(photoId, 10);
  }));

  return (
    <div className='one-photo-page-container'>
      <div className='one-photo-top-container'>
        <img className='user-photo' src={photoDetails.imageUrl} alt={photoDetails.title}/>
        {/* <div className='content-container'></div> */}
        <div className='one-photo-page-engagement'>
          <LikeButton/>
        </div>
      </div>
      <div className='one-photo-bottom-container'>
        <div className='bottom-left-container'>
          <div className='content-container'>
            <div className='photo-details-username'>{photoDetails.User.username}</div>
            <div className='photo-details-title'>{photoDetails.title}</div>
            <div className='photo-details-description'>{photoDetails.content}</div>
            <div className='line-div'/>
        </div>
        <div className='comments-container'>
          {allComments.map(comment =>
            <div className='comment-container' key={comment.id}>
              {!showComment && comment.id === commentId ?
                <div/> :
                <div>
                  <div className='user-comment-username'>{comment.User.username}</div>
                  <span className='user-comment'>{comment.comment}</span>
                </div>
              }
              {comment.userId === sessionUser.id &&
                <EditDeleteButton comment={comment} photoId={photoId} setShowComment={setShowComment} setCommentId={setCommentId}/>
              }
              </div>
          )}
          <CommentFormPage photoId={photoId}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnePhoto;
