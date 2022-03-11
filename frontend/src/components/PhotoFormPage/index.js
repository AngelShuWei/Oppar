import './PhotoFormPage.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory} from "react-router-dom";
import * as photosActions from '../../store/photos';

function PhotoFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(photosActions.createPhoto({ title, imageUrl, content }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    if (!errors) return history.push('/photos');
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
          // required
          />
        <label className='label-field'>ImageUrl</label>
        <input className='input-field'
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          // required
        />
        <label className='label-field'>Description</label>
        <input className='input-field'
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          />
        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
        <button className='sign-button' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhotoFormPage;
