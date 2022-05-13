// import './EditDeleteButton.css'
import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comments';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditCommentForm from '../EditCommentForm/index.js';

function EditDeleteButton( {comment, photoId, setShowComment} ) {
  const dispatch = useDispatch();
  const [showEditComment, setShowEditComment] = useState(false);

  const EditComment = () => {
    setShowEditComment(true);
    setShowComment(false);
  }

  return (
    <span>
      {!showEditComment &&
      <span>
        <button className='edit-delete-button' onClick={EditComment}>
          <i className="fa-lg fa-solid fa-pen-to-square" />
        </button>
        <button className='edit-delete-button' onClick={() => dispatch(deleteComment(comment.id))}>
          <i className="fa-lg fa-solid fa-trash-can"></i>
        </button>
      </span>
      }
      {showEditComment &&
      <EditCommentForm comment={comment} photoId={photoId} setShowEditComment={setShowEditComment} setShowComment={setShowComment}/>
      }
    </span>
  )
}

export default EditDeleteButton;
