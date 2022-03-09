import './EditDeleteButton.js'
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto } from '../../store/photos';

function EditDeleteButton( {photo} ) {
  const dispatch = useDispatch();

  return (
    <div>
      <button>✏️</button>
      <button onClick={() => dispatch(deletePhoto(photo.id))}>🗑️</button>
    </div>
  )
}

export default EditDeleteButton;
