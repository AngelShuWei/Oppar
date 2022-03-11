import './EditPhotoFormPage.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory, useParams} from "react-router-dom";
import * as photosActions from '../../store/photos';

function EditPhotoFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);
  const photo = useSelector((state) => state.photos[parseInt(photoId, 10)]); //need to key into state.photo object to get param
  const albums = useSelector((state) => Object.values(state.albums));
  const [title, setTitle] = useState(photo.title); //prefill with the proper info
  const [imageUrl, setImageUrl] = useState(photo.imageUrl);
  const [content, setContent] = useState(photo.content);
  const [errors, setErrors] = useState([]);
  const userAlbums = albums.filter(album => album.userId === sessionUser.id);
  const [album, setAlbum] = useState(userAlbums[0]);

  if (!sessionUser) return (
    <Redirect to='/'/>
  )

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    dispatch(photosActions.updatePhoto({ id:photo.id, title, imageUrl, album, content }))
      .then(JD => history.push('/photos'))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="page-container">
      <form className='form-container' onSubmit={handleSubmit}>
        <h3>Edit photo🖼️</h3>
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
        <label className='label-field'>
          Select an Album (optional)
          <select value={album} onChange={e => setAlbum(e.target.value)}>
              {userAlbums.map(album => (
              <option
                key={album.id}
                value={album.id}
              >
                {album.title}
              </option>
              ))}
          </select>
        </label>
        <label className='label-field'>Description (optional)</label>
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

export default EditPhotoFormPage;
