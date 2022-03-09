import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";

function OnePhoto() {
  const { photoId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  return (
    <div className='page-container'>
      <div className='photo-container'>
        <img src={photoDetails.imageUrl} alt={photoDetails.title}/>
      </div>
      <div className='content-container'>
        {photoDetails.title}
        {photoDetails.content}
      </div>
    </div>
  )
}

export default OnePhoto;
