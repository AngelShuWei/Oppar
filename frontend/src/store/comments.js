import { csrfFetch } from "./csrf";

export const LOAD = "comment/load"
export const ADD_ONE = "comment/addOne";
export const UPDATE_ONE = "comment/updateOne";
export const DELETE_ONE = "comment/deleteOne";

const load = (comments) => {
  return {
    type: LOAD,
    comments
  }
}

const addOne = (comment) => {
  return {
    type: ADD_ONE,
    comment
  };
};

const deleteOne = (comment) => {
  return {
    type: DELETE_ONE,
    comment
  }
}

export const getAllComments = () => async(dispatch) => {
  const response = await csrfFetch(`/api/comments`);
  if (response.ok) {
    const data = await response.json();
    await dispatch(load(data.allComments));
  }
  return response;
}

export const createComment = (userComment) => async(dispatch) => {
  const { comment, photoId } = userComment; // had to use userComment here becuase we are destructuring comment and can't have two of the same variable
  const response = await csrfFetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      comment,
      photoId,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.userComment));
  }
  return response;
}

export const updateComment = (comment) => async(dispatch) => {
  const response = await csrfFetch(`/api/comments/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.comment));
  }
  return response;
}

export const deleteComment = (commentId) => async(dispatch) => {
  const response = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const id = await response.json();
    dispatch(deleteOne(id));
  }
}

const initialState = {};

const commentsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOAD:
      action.comments.forEach(comment => {
        return newState[comment.id] = comment;
      });
      return newState;
    case ADD_ONE:
      newState[action.comment.id] = action.comment;
      return newState
    case UPDATE_ONE:
      newState[action.comment.id] = action.comment;
    case DELETE_ONE:
      delete newState[action.comment];
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
