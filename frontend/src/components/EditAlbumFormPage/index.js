import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory, useParams} from "react-router-dom";
import * as albumsActions from '../../store/albums';

function EditAlbumFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { albumId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const album = useSelector((state) => state.albums[parseInt(albumId, 10)]);
  const [title, setTitle] = useState(album.title); //prefill with the proper info
  const [imageUrl, setImageUrl] = useState(album.imageUrl);
  const [content, setContent] = useState(album.content);
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(albumsActions.updateAlbum({ id:album.id, title, imageUrl, content }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
     if (!errors) return history.push('/albums');
  };

  return (
    <div className="page-container">
      <form className='form-container' onSubmit={handleSubmit}>
        <h3>Edit an album</h3>
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

export default EditAlbumFormPage;
