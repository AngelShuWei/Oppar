import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory} from "react-router-dom";
import * as commentsActions from '../../store/comments';

function CommentFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    await dispatchEvent(commentsActions.createComment({ comment }))
      .then(JD => history.push(`/photos/${photoId}`))
      .catch(async(res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className='page-container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <textarea/>
      </form>
    </div>
  )
}

export default CommentFormPage;
