import { GET_GALLERY, GET_GALLERY_SUCCESS } from 'constants/action-types';

const initialState = {
  loaded: false,
  photos: []
};

export default function gallery(state = initialState, action) {
  switch (action.type) {
    case GET_GALLERY:
      return { ...state, loaded: true };
    case GET_GALLERY_SUCCESS: {
      const photos = action.result;
      return { ...state, loaded: true, photos };
    }
    default:
      return state;
  }
}
