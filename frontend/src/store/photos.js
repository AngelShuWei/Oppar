import { csrfFetch } from "./csrf"; //used to fetch a CRSF token. App must send req header called X-SRF-TOKEN w/ the vale fetch

export const LOAD = "photo/load"
export const ADD_ONE = "photo/addOne";
export const UPDATE_ONE = "photo/updateOne";

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

const updateOne = (photo) => {
  return {
    type: UPDATE_ONE,
    photo
  }
}

export const getAllPhotos = () => async(dispatch) => {
  const response = await csrfFetch(`/api/photos`);
  if (response.ok) {
    const data = await response.json();
    // console.log(data);
    dispatch(load(data.allPhotos));
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

// export const updatePhoto = (photo) => async(dispatch) => {
//   const response = await csrfFetch(`/api/photos/${photo.id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       title,
//       imageUrl,
//       content
//     }),
//   });
//   if (response.ok) {
//     const data = await response.json();
//     dispatch(updateOne(data.photo));
//   }
//   return response;
// }

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
      newState[action.photo.id] = action.payload
  default:
    return state;
 }
};

export default photosReducer;
