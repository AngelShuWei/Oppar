import './UserAlbums.css'
import flowerBackground from '../../assets/flower.png'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory, useParams} from "react-router-dom";
import * as photosActions from '../../store/photos';
import EditDeleteAlbumButton from './EditDeleteAlbumButton';

function UserAlbums () {
  const sessionUser = useSelector((state) => state.session.user); //uncomment if prop doesn't work
  const albums = useSelector(state => Object.values(state.albums));

  if (!sessionUser) return (
    <Redirect to='/'/>
    )

  const userAlbums = albums.filter(album => album.userId === sessionUser.id);
  // console.log(userAlbums)

  return (
    <>
      <img className='flower-background' id='albums' src={flowerBackground} alt='flower'/>
        <div className='user-album-page-container'>
          <div className='add-album-button'>
            <Link className='new-album-button link' to='/albums/upload'>
              <button className='new-album-button'>
                <i className="fa-regular fa-square-plus"></i>
                <p> New album</p>
              </button>
            </Link>
          </div>
          <div className='user-albums-container'>
            {userAlbums.map(album => (
              <div className='albums-info' key={album.id}>
                <Link to={`/albums/${album.id}`}>
                <img className='user-album' src={album.imageUrl || "https://m.media-amazon.com/images/I/81VLzTqpyyL._AC_SX679_.jpg"} alt={album.title}/>
                </Link>
                <EditDeleteAlbumButton album={album}/>
                <p className='user-album-text'>{album.title}</p>
              </div>
            ))}
          </div>
       </div>
    </>
  )
}

export default UserAlbums;
