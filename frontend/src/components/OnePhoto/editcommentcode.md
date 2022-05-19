import './OnePhoto.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect, useState} from 'react';
import * as commentsActions from "../../store/comments";
import CommentFormPage from '../CommentFormPage';
import EditDeleteButton from './EditDeleteButton';
import LikeButton from '../PhotoLikes';
import EditCommentForm from '../EditCommentForm';
import { deleteComment } from '../../store/comments';

function OnePhoto() {
  const dispatch = useDispatch();
  const { photoId } = useParams();

  const [showComment, setShowComment] = useState(true);
  const [commentButtons, setCommentButtons] = useState(true);
  const [commentId, setCommentId] = useState(-1);
  console.log(showComment, 'showing comment?');
  console.log(commentButtons, 'showing button?')
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser, 'this is session user');
  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId
  const allComments = useSelector(state => Object.values(state.comments).filter(comment => {
    return comment.photoId === parseInt(photoId, 10);
  }));

  const EditComment = (comment) => {
    setCommentId(comment.id);
    if (comment.id === commentId) {
      setCommentButtons(false);
      setShowComment(false);
    }
  }

  return (
    <>
      <div className='one-photo-page-container'>
        <img className='one-photo-container' src={photoDetails.imageUrl} alt={photoDetails.title}/>
        {/* <div className='content-container'></div> */}
        <div className='one-photo-page-engagement'>
          <LikeButton/>
        </div>
      </div>
        <div className='content-container'>
          {/* <div className='photo-details-username'>By: {sessionUser.username}</div> */}
          <div className='photo-details-title'>{photoDetails.title}</div>
          <div>{photoDetails.content}</div>
      </div>
      <div className='comments-container'>
        {allComments.map(comment =>

          <div key={comment.id}>
            {showComment ?
              <span>{comment.comment}</span> :
              <EditCommentForm comment={comment} photoId={photoId} setShowComment={setShowComment} commentButtons={commentButtons} setCommentButtons={setCommentButtons}/>
            }
            {/* <EditDeleteButton comment={comment} photoId={photoId} showComment={showComment} setShowComment={setShowComment}/> */}
            {commentButtons &&
              <span>
                <button className='edit-delete-button' onClick={() => EditComment(comment)}>
                  <i className="fa-lg fa-solid fa-pen-to-square" />
                </button>
                <button className='edit-delete-button' onClick={() => dispatch(deleteComment(comment.id))}>
                  <i className="fa-lg fa-solid fa-trash-can"></i>
                </button>
              </span>
            }
          </div>
        )}
        <CommentFormPage photoId={photoId}/>
      </div>
    </>
  )
}

export default OnePhoto;
