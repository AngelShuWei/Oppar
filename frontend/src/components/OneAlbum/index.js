import './OneAlbum.css'
import flowerBackground from '../../assets/flower.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";

function OneAlbum({photos}) {
  const { albumId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const albums = useSelector((state) => state.albums[albumId]) //state.albums is an object w/ all albums, key into the specific album object (singular object) {id, userId, title..}
  // console.log(albums)

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const userAlbum = photos.filter(photo => photo.albumId === albums.id) //returns an ARRAY of photo objects. album.id gives the integer id for the specific album obj
  console.log(userAlbum);

  return (
    <div className='view-album-page-container'>
      <img className='album-background' src={userAlbum[0].imageUrl} alt='flower'/>
        <div className='view-album-text'>
          <h1 className='view-album-title-text'>{albums.title}</h1>
          <h3 className='view-album-desc-text'>{albums.content}</h3>
        </div>
        {/* <div className='user-album-page-container'> */}
          <div className='view-album-container'>
            {userAlbum.map(photos => (
              <div key={photos.id}>
                <img className='view-album' src={photos.imageUrl} alt={photos.title}></img>
              </div>
            ))}
          </div>
        {/* </div> */}
    </div>
  )
}

export default OneAlbum;
