import { csrfFetch } from "./csrf"; //used to fetch a CRSF token. App must send req header called X-SRF-TOKEN w/ the vale fetch

export const LOAD = "photo/load"
export const ADD_ONE = "photo/addOne";
export const UPDATE_ONE = "photo/updateOne";
export const DELETE_ONE = "photo/deleteOne";

const load = (photos) => {
  return {
    type: LOAD,
    photos
  }
}

const addOne = (photo) => {
  return {
    type: ADD_ONE,
    photo
  };
};

const deleteOne = (photo) => {
  return {
    type: DELETE_ONE,
    photo
  }
}

export const getAllPhotos = () => async(dispatch) => {
  const response = await csrfFetch(`/api/photos`);
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    await dispatch(load(data.allPhotos));
  }
  return response;
}

export const createPhoto = (photo) => async(dispatch) => {
  const { title, imageUrl, album, content } = photo;
  const response = await csrfFetch(`/api/photos`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      imageUrl,
      album,
      content
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.photo));
  }
  return response;
}

export const updatePhoto = (photo) => async(dispatch) => {
  const response = await csrfFetch(`/api/photos/${photo.id}`, { //passing in whole photo object
    method: 'PUT',
    body: JSON.stringify(photo),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.photo));
  }
  return response;
}

export const deletePhoto = (photoId) => async(dispatch) => {
  const response = await csrfFetch(`/api/photos/${photoId}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const id = await response.json();
    dispatch(deleteOne(id));
  }
}

const initialState = {};

const photosReducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOAD:
      action.photos.forEach(photo => {
      return newState[photo.id] = photo;
      });
      return newState; //need to return again because two functions
    case ADD_ONE:
      newState[action.photo.id] = action.photo;
      return newState;
      // newState = {...state};
      // newState.photo = action.photo;
      // return newState; < this incorrect
    case UPDATE_ONE:
      newState[action.photo.id] = action.photo;
      return newState;
    case DELETE_ONE:
      delete newState[action.photo];
      return newState;
  default:
    return state;
 }
};

export default photosReducer;
