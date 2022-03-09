import './EditDeleteButton.css'
import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto } from '../../store/photos';

function EditDeleteButton( {photo} ) {
  const dispatch = useDispatch();

  return (
    <div>
      <button>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button onClick={() => dispatch(deletePhoto(photo.id))}>
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  )
}

export default EditDeleteButton;
