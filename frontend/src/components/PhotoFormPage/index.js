import './PhotoFormPage.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link} from "react-router-dom";
import * as sessionActions from '../../store/session';
import * as photosActions from '../../store/photos';

function PhotoFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));  //if there is user, then set load to true
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
      setErrors([]);
      return dispatch(photosActions.createPhoto({ title, imageUrl, content }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
  };

  return (
    <div className="page-container">
      <form className='form-container' onSubmit={handleSubmit}>
      <h3>Upload a photo🖼️</h3>
      <label className='label-field'>Title</label>
      <input className='input-field'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
      <label className='label-field'>ImageUrl</label>
      <input className='input-field'
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <label className='label-field'>Description</label>
      <input className='input-field'
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  )
}

export default PhotoFormPage;
