import { csrfFetch } from "./csrf"; //used to fetch a CRSF token. App must send req header called X-SRF-TOKEN w/ the vale fetch

export const GET_PHOTO = "photo/loadPhoto"
export const ADD_PHOTO = "photo/addOne";

const loadPhoto = (photos) => {
  return {
    type: GET_PHOTO,
    photos
  }
}

const addOne = (photo) => {
  return {
    type: ADD_PHOTO,
    photo
  };
};

export const getAllPhotos = () => async(dispatch) => {
  const response = await csrfFetch(`/api/photos`);
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    dispatch(loadPhoto(data.allPhotos));
  }
  return response;
}

export const createPhoto = (photo) => async(dispatch) => {
  const { title, imageUrl, content } = photo;
  const response = await csrfFetch(`/api/photos`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      imageUrl,
      content
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addOne(data.photo));
  }
  return response;
}

const initialState = {};

const photosReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_PHOTO:
      newState = {...state};
      action.photos.forEach(photo => {
      return newState[photo.id] = photo;
      });
      return newState; //need to return again because two functions
    case ADD_PHOTO:
      newState = {...state};
      newState.photo = action.photo;
      console.log(newState);
      return newState;
  default:
    return state;
 }
};

export default photosReducer;
