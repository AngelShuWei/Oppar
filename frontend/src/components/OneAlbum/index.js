import './OneAlbum.css'
import flowerBackground from '../../assets/flower.png'
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
      <div className='flower-background' src={flowerBackground} alt='flower'>
        <div className='user-album-page-container'>
          <h1>{albums.title}</h1>
          <h3>{albums.content}</h3>
          <div className='user-albums-container'>
            {userAlbum.map(photos => (
              <div key={photos.id}>
                <img className='user-album' src={photos.imageUrl} alt={photos.title}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OneAlbum;
