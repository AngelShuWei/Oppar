import './OnePhoto.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";

function OnePhoto() {
  const { photoId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId

  return (
    <>
    <div className='one-photo-page-container'>
        <img className='one-photo-container' src={photoDetails.imageUrl} alt={photoDetails.title}/>
      <div className='content-container'>
      </div>
    </div>
      <div className='content-container'>
        <div>{photoDetails.title}</div>
        <div>{photoDetails.content}</div>
      </div>
    </>
  )
}

export default OnePhoto;
