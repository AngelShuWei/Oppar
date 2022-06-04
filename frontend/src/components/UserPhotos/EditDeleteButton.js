import './EditDeleteButton.css'
import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto } from '../../store/photos';
import { Link } from 'react-router-dom';

function EditDeleteButton( {photo} ) {
  const dispatch = useDispatch();

  return (
    <div className='user-engagement-tools'>
      <Link to={`/photos/${photo.id}/edit`}>
        <button className='edit-delete-button'>
          <i className="fa-xl fa-solid fa-pen-to-square" />
        </button>
      </Link>
      <button className='edit-delete-button' onClick={() => dispatch(deletePhoto(photo.id))}>
        <i className="fa-xl fa-solid fa-trash-can"></i>
      </button>
    </div>
  )
}

export default EditDeleteButton;
