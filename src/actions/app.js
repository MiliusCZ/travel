import { APP_LOAD, GET_GALLERY } from 'constants/action-types';

export function loadApp() {
  return {
    type: APP_LOAD
  };
}

export const loadGallery = galleryName => ({
  type: GET_GALLERY,
  payload: galleryName
});


