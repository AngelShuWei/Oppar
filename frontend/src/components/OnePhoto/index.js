import './OnePhoto.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect, useState} from 'react';
import { deleteComment } from '../../store/comments';
import * as commentsActions from "../../store/comments";
import CommentFormPage from '../CommentFormPage';
import EditDeleteButton from './EditDeleteButton';
import LikeButton from '../PhotoLikes';
import EditCommentForm from '../EditCommentForm/index.js';

function OnePhoto() {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const [showComment, setShowComment] = useState(true);
  const [showCommentButtons, setShowCommentButtons] = useState(true);
  const [clickedEditButton, setClickedEditButton] = useState(-1);
  console.log(clickedEditButton, 'see')

  const sessionUser = useSelector(state => state.session.user);
  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId

  const allComments = useSelector(state => Object.values(state.comments).filter(comment => {
    return comment.photoId === parseInt(photoId, 10);
  }));

  const EditComment = () => {
    setShowCommentButtons(false);
    setShowComment(false);
  }

  useEffect(() => {

  })

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
            {!showComment && comment.id === 1?
              <div/>:
              <span>{comment.comment}</span>
            }
            {/* <EditDeleteButton comment={comment} photoId={photoId} setShowComment={setShowComment}/> */}
            <span>
              {showCommentButtons ?
              <span>
                <button className='edit-delete-button' onClick={() => EditComment}>
                  <i className="fa-lg fa-solid fa-pen-to-square" />
                </button>
                <button className='edit-delete-button' onClick={() => dispatch(deleteComment(comment.id))}>
                  <i className="fa-lg fa-solid fa-trash-can"></i>
                </button>
              </span> :
                <EditCommentForm comment={comment} photoId={photoId} setShowComment={setShowComment} setShowCommentButtons={setShowCommentButtons}/>
              }
            </span>
          </div>
        )}
        <CommentFormPage photoId={photoId}/>
      </div>
    </>
  )
}

export default OnePhoto;
