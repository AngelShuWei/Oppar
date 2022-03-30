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
      <div className='page-container'>
        <form className='idk-container' onSubmit={handleSubmit}>
          <label className='label-field'>Description (optional) </label>
          <textarea className='input-field' placeholder='Enter a description'
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {errors.map((error, idx) => <p key={idx}>{error}</p>)}
          <button className='sign-button'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default CommentFormPage;
