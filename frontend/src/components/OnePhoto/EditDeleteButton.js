// import './EditDeleteButton.css'
import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comments';
import { Link } from 'react-router-dom';
import EditCommentForm from '../EditCommentForm/index.js';
import { useState } from 'react';

function EditDeleteButton( {comment, photoId} ) {
  const dispatch = useDispatch();
  const [showComment, setShowComment] = useState(false);

  return (
    <span>
      {!showComment &&
        <button className='edit-delete-button' onClick={() => setShowComment(true)}>
          <i className="fa-lg fa-solid fa-pen-to-square" />
        </button>
      }
        {console.log(showComment, '-0------')}
      {showComment &&
      <EditCommentForm comment={comment} photoId={photoId} setShowComment={setShowComment}/>
      }
      <button className='edit-delete-button' onClick={() => dispatch(deleteComment(comment.id))}>
        <i className="fa-lg fa-solid fa-trash-can"></i>
      </button>
    </span>
  )
}

export default EditDeleteButton;
