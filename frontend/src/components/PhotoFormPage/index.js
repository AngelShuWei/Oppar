import './PhotoFormPage.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory} from "react-router-dom";
import * as photosActions from '../../store/photos';

function PhotoFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const albums = useSelector((state) => Object.values(state.albums).filter(album => {
    return album.userId === sessionUser.id;
  }));

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [album, setAlbum] = useState(-1);
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    console.log(title, content)
    await dispatch(photosActions.createPhoto({ title, imageUrl, album, content }))
      .then(JD => history.push('/photos')) //.then means have to wait for the dispatch to complete before moving on
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
        <input className='input-field' placeholder="Photo title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // required
          />
        <label className='label-field'>ImageUrl</label>
        <input className='input-field' placeholder="ImageUrl"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          // required
        />
        <label className='label-field'>
          Add to an album (optional)
          <select value={album} onChange={e => setAlbum(e.target.value)}>
              <option value={-1}>
              None
              </option>
              {albums.map(album => (
              <option
                key={album.id}
                value={album.id} //sending an id to the database
              >
                {album.title}
              </option> //^ what is rendering on the drop down
              ))}
          </select>
        </label>
        <label className='label-field'>Description (optional) </label>
        <textarea className='input-field' placeholder="Enter a description"
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
