import { csrfFetch } from "./csrf"; //used to fetch a CRSF token. App must send req header called X-SRF-TOKEN w/ the vale fetch

export const SET_PHOTO = "photo/setPhoto";
export const GET_PHOTO = "photo/loadPhoto"

const loadPhoto = () => {
  return {
    type: GET_PHOTO,
  }
}

const setPhoto = (photo) => {
  return {
    type: SET_PHOTO,
    photo
  };
};

export const getAllPhotos = () => async(dispatch) => {
  const response = await csrfFetch(`/api/photos`);
  if (response.ok) {
    const data = await response.json();
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
    dispatch(setPhoto(data.photo));
  }
  return response;
}

const initialState = { user: null};

const photosReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
   case SET_PHOTO:
    newState = {...state};
    newState.photo = action.photo;
    return newState;
  default:
    return state;
 }
};

export default photosReducer;
