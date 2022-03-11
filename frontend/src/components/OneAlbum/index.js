import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";

function OneAlbum({photos}) {
  const { albumId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const albums = useSelector((state) => state.albums[albumId])

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const userAlbum = photos.filter(photo => photo.albumId === albums.id)

  return (
    <>
      <h1>{albums.title} {albums.content}</h1>
      {userAlbum.map(photos => (
        <div key={photos.id}>
          <img src={photos.imageUrl} alt={photos.title}></img>
        </div>
      ))}
    </>
  )
}

export default OneAlbum;
