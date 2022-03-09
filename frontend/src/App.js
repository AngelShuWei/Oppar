import './index.css'
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import * as sessionActions from "./store/session";
import * as photosActions from "./store/photos";
import Homepage from './components/HomePage';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import SignupFormPage from './components/SignupFormPage';
import PhotoFormPage from './components/PhotoFormPage';
import UserPhotos from './components/UserPhotos';
import OnePhoto from './components/OnePhoto';
import EditPhotoFormPage from './components/EditPhotoFormPage';

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const photos = useSelector(state => Object.values(state.photos));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));  //if there is user, then set load to true
    dispatch(photosActions.getAllPhotos());
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
          {/* <Route path="/photo/edit">
            <EditPhotoFormPage photos={photos}/>
          </Route> */}
          <Route exact path="/photos">
            <UserPhotos photos={photos}/>
          </Route>
          <Route path="/photos/:photoId">
            <OnePhoto />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
