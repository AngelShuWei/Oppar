import './CommentFormPage.css'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory} from "react-router-dom";
import * as commentsActions from '../../store/comments';

function CommentFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    await dispatchEvent(commentsActions.createComment({ comment }))
      .then(JD => history.push(`/photos`))
      .catch(async(res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <form className='comments-container' onSubmit={handleSubmit}>
        <textarea className='input-field' placeholder='Add a comment'
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
        <button className='submit-button'>Submit</button>
      </form>
    </>
  )
}

export default CommentFormPage;
