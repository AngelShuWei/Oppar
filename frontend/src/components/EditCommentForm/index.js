import './EditCommentForm.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Link, useHistory} from "react-router-dom";
import * as commentsActions from '../../store/comments';

function EditCommentForm({comment, photoId, setShowComment, setShowCommentButtons}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [content, setContent] = useState(comment.comment);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setShowCommentButtons(true);
    setShowComment(true);

    setErrors([]);
    await dispatch(commentsActions.updateComment({ comment: content, commentId: comment.id}))
      .then(JD => history.push(`/photos/${photoId}`))
      .catch(async(res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <>
      <form className='edit-comments-container' onSubmit={handleSubmit}>
        <textarea className='input-field' id='edit-comment'
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.map((error, idx) => <p key={idx}>{error}</p>)}
        <button className='submit-button' id='edit-comment' >Done</button>
      </form>
    </>
  )
}

export default EditCommentForm;
