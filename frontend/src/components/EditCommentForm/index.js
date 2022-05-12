import './CommentFormPage.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory} from "react-router-dom";
import * as commentsActions from '../../store/comments';

function EditCommentForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [content, setContent] = useState(comment.comment);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    // setComment("");
    await dispatch(commentsActions.createComment({ comment, photoId }))
      .then(JD => history.push(`/photos/${photoId}`))
      .catch(async(res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <form className='comments-container' onSubmit={handleSubmit}>
        <textarea className='input-field' placeholder='Edit a comment'
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
        <button className='submit-button'>Comment</button>
      </form>
    </>
  )
}

export default EditCommentForm;
