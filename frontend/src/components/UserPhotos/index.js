import { NavLink, Route, Link } from 'react-router-dom';

function UserPhotos({sessionUser, photos}) {
  const userPhotos = photos.filter(photo => photo.userId === sessionUser.id)

  return (
    <div>
      {userPhotos.map(photo => (<Link to={`/photos/${photo.id}`}><img src={photo.imageUrl} alt={photo.title} key={photo.id}/></Link>))}
    </div>
  )
}

export default UserPhotos;
