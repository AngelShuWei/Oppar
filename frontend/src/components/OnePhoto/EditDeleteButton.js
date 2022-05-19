// import './EditDeleteButton.css'
import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comments';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditCommentForm from '../EditCommentForm/index.js';

function EditDeleteButton( {comment, photoId, setShowComment} ) {
  const dispatch = useDispatch();
  const [showCommentButtons, setShowCommentButtons] = useState(true);

  const EditComment = () => {
    setShowCommentButtons(false);
    setShowComment(false);
  }

  return (
    <span>
      {showCommentButtons ?
      <span>
        <button className='edit-delete-button' onClick={EditComment}>
          <i className="fa-lg fa-solid fa-pen-to-square" />
        </button>
        <button className='edit-delete-button' onClick={() => dispatch(deleteComment(comment.id))}>
          <i className="fa-lg fa-solid fa-trash-can"></i>
        </button>
      </span> :
        <EditCommentForm comment={comment} photoId={photoId} setShowComment={setShowComment} setShowCommentButtons={setShowCommentButtons}/>
      }
    </span>
  )
}

export default EditDeleteButton;
