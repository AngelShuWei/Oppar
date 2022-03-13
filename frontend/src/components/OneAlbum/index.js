import './OneAlbum.css'
import flowerBackground from '../../assets/flower.png'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import { useEffect } from 'react';
import { getAllPhotos } from '../../store/photos';

function OneAlbum() {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  // console.log(sessionUser);
  const photos = useSelector(state => Object.values(state.photos));
  const albums = useSelector((state) => state.albums[albumId]) //state.albums is an object w/ all albums, key into the specific album object (singular object) {id, userId, title..}

  useEffect(() => {
    dispatch(getAllPhotos());
  }, [dispatch])

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const userAlbum = photos.filter(photo => photo.albumId === albums?.id) //returns an ARRAY of photo objects. album.id gives the integer id for the specific album obj

  return (
    <div className='view-album-page-container'>
        <img className='album-background' src={(userAlbum[userAlbum.length-1])?.imageUrl || "https://m.media-amazon.com/images/I/81VLzTqpyyL._AC_SX679_.jpg"} alt='flower'/>
        <div className='view-album-text'>
          <h1 className='view-album-title-text'>{albums?.title}</h1>
          <h3 className='view-album-desc-text'>{albums?.content}</h3>
          <h4 className='view-album-desc-user'>By: {sessionUser.username}</h4>
        </div>
          <div className='view-album-container'>
            {userAlbum.map(photos => (
              <div key={photos.id}>
                <Link to={`/photos/${photos.id}`}>
                <img className='view-album' src={photos.imageUrl} alt={photos.title}></img>
                </Link>
              </div>
            ))}
          </div>
    </div>
  )
}

export default OneAlbum;
