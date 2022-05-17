import { csrfFetch } from "./csrf";

export const LOAD = "like/load";
export const ADD_ONE = "like/addOne";
export const DELETE_ONE = "like/deleteOne";

const load = (likes) => {
  return {
    type: LOAD,
    likes
  }
}

const addOne = (like) => {
  return {
    type: ADD_ONE,
    like
  }
}

const deleteOne = (like) => {
  return {
    type: DELETE_ONE,
    like
  }
}

export const getAllLikes = () => async(dispatch) => {
  const response = await csrfFetch(`/api/likes`);
  if (response.ok) {
    const data = await response.json();
    await dispatch(load(data.allLikes));
  };
  return response;
};

export const createLike = (like) => async(dispatch) => {
  const { photoId } = like;
  const response = await csrfFetch(`/api/likes`, {
    method: 'POST',
    body: JSON.stringify({
      photoId,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.like));
  }
}

export const deleteLike = (likeId) => async(dispatch) => {
  const response = await csrfFetch(`/api/likes/${likeId}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    const id = await response.json();
    dispatch(deleteOne(id));
  };
  return response;
};

const initialState = {};

const likesReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOAD:
      action.likes.forEach(like => {
        newState[like.id] = like;
      });
      return newState;
    case ADD_ONE:
      newState[action.like.id] = action.like;
      return newState;
    case DELETE_ONE:
      delete newState[action.like];
      return newState;
  default:
    return state;
  };
};

export default likesReducer;
