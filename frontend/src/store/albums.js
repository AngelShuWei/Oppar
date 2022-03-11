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

export const createAlbum = (album) => async(dispatch) => {
  const { title, imageUrl, content } = album;
  const response = await csrfFetch(`/api/albums`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      imageUrl,
      content
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.album));
  }
  return response;
}

export const updateAlbum = (album) => async(dispatch) => {
  const response = await csrfFetch(`/api/albums/${album.id}`, {
    method: 'PUT',
    body: JSON.stringify(album),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.album));
  }
  return response;
}

export const deleteAlbum = (albumId) => async(dispatch) => {
  const response = await csrfFetch(`/api/albums/${albumId}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const id = await response.json();
    dispatch(deleteOne(id));
  }
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
    case ADD_ONE:
      newState[action.album.id] = action.album;
      return newState;
    case UPDATE_ONE:
      newState[action.album.id] = action.album;
      return newState;
    case DELETE_ONE:
      delete newState[action.album];
      return newState;
  default:
    return state;
 }
};

export default albumsReducer;
