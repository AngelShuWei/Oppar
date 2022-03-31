// import './EditDeleteButton.css'
import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../../store/comments';
import { Link } from 'react-router-dom';

function EditDeleteButton( {comment} ) {
  const dispatch = useDispatch();
  console.log(comment.id) //return comment.id in integerform

  return (
    <div>
      {/* <Link to={`/photos/${photo.id}/edit`}>
        <button className='edit-delete-button'>
          <i className="fa-lg fa-solid fa-pen-to-square" />
        </button>
      </Link> */}
      <button className='edit-delete-button' onClick={() => dispatch(deleteComment(comment.id))}>
        <i className="fa-lg fa-solid fa-trash-can"></i>
      </button>
    </div>
  )
}

export default EditDeleteButton;
