import { useDispatch, useSelector } from 'react-redux';
import { deleteAlbum } from '../../store/albums';
import { Link } from 'react-router-dom';

function EditDeleteAlbumButton( {album} ) {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to={`/albums/${album.id}/edit`}>
        <button className='edit-delete-button'>
          <i className="fa-lg fa-solid fa-pen-to-square" />
        </button>
      </Link>
      {/* <button className='edit-delete-button' onClick={() => dispatch(deleteAlbum(album.id))}>
        <i className="fa-lg fa-solid fa-trash-can"></i>
      </button> */}
    </div>
  )
};

export default EditDeleteAlbumButton;
