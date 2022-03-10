import { csrfFetch } from "./csrf";

export const LOAD = "album/load"
export const ADD_ONE = "album/addOne";
export const UPDATE_ONE = "album/updateOne";
export const DELETE_ONE = "album/deleteOne";

const load = (albums) => {
  return {
    type: LOAD,
    albums
  }
}

const addOne = (album) => {
  return {
    type: ADD_ONE,
    album
  };
};

const deleteOne = (album) => {
  return {
    type: DELETE_ONE,
    album
  }
}

export const getAllAlbums = () => async(dispatch) => {
  const response = await csrfFetch(`/api/albums`);
  if (response.ok) {
    const data = await response.json();
    dispatch(load(data.allAlbums));
  }
  return response;
}

const initialState = {};

const albumsReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOAD:
      action.albums.forEach(album => {
      return newState[album.id] = album;
      });
      return newState; //need to return again because two functions
    // case ADD_ONE:
    //   newState[action.photo.id] = action.photo;
    //   return newState;
    // case UPDATE_ONE:
    //   newState[action.photo.id] = action.photo;
    //   return newState;
    // case DELETE_ONE:
    //   delete newState[action.photo];
    //   return newState;
  default:
    return state;
 }
};

export default albumsReducer;
