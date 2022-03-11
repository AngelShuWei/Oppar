import './UserAlbums.css'
import flowerBackground from '../../assets/flower.png'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory, useParams} from "react-router-dom";
import * as photosActions from '../../store/photos';

function UserAlbums ({albums}) {
  const sessionUser = useSelector((state) => state.session.user); //uncomment if prop doesn't work

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
            <Link to='/albums/upload'><button>
              <i className="fa-regular fa-square-plus">New-album</i>
            </button>
            </Link>
            </div>
            <div className='user-albums-container'>
              {userAlbums.map(album => (
                <div className='albums-info' key={album.id}>
                  <Link to={`/albums/${album.id}`}>
                  <img className='user-album' src={album.imageUrl || "https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"} alt={album.title}/>
                  </Link>
                  <p className='user-album-text'>{album.title}</p>
                </div>
              ))}
          </div>
       </div>
    </>
  )
}

export default UserAlbums;
