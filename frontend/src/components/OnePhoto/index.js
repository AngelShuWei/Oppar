import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

function OnePhoto() {
  const { photoId } = useParams();

  const photoDetails = useSelector(state => state.photos[photoId]); //keying into redux object at the photoId
  console.log(photoDetails);

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
