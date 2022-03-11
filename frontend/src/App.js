import './index.css'
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import * as sessionActions from "./store/session";
import * as photosActions from "./store/photos";
import * as albumsActions from "./store/albums";
import Homepage from './components/HomePage';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import SignupFormPage from './components/SignupFormPage';
import PhotoFormPage from './components/PhotoFormPage';
import UserPhotos from './components/UserPhotos';
import OnePhoto from './components/OnePhoto';
import EditPhotoFormPage from './components/EditPhotoFormPage';
import UserAlbums from './components/UserAlbums';
import AlbumFormPage from './components/AlbumFormPage';
import OneAlbum from './components/OneAlbum';
import EditAlbumFormPage from './components/EditAlbumFormPage';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const photos = useSelector(state => Object.values(state.photos)); // {userId: {photos obj...}}
  const albums = useSelector(state => Object.values(state.albums)); // {userId: {albums obj....}}
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));  //if there is user, then set load to true
    dispatch(photosActions.getAllPhotos()); //need to do this in case more photos get uploaded by users
    dispatch(albumsActions.getAllAlbums()); //need to do this in case more albums get uploaded by users
  }, [dispatch]);


  return ( //if isLoaded is true, then load all of the routes
    <>
      <Navigation isLoaded={isLoaded} />
      {/* {if (!sessionUser) {
      }}  NEEED TO DO THIS */}
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/upload">
            <PhotoFormPage />
          </Route>
          <Route path="/photos/:photoId/edit">
            <EditPhotoFormPage/>
          </Route>
          <Route exact path="/photos">
            <UserPhotos photos={photos}/>
          </Route>
          <Route path="/photos/:photoId">
            <OnePhoto />
          </Route>
          <Route path="albums/:albumId/edit">
            <EditAlbumFormPage />
          </Route>
          <Route exact path="/albums">
            <UserAlbums albums={albums}/>
          </Route>
          <Route path="/albums/upload">
            <AlbumFormPage />
          </Route>
          <Route path="/albums/:albumId">
            <OneAlbum photos={photos}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
