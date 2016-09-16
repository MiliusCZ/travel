import { APP_LOAD, APP_INIT_SUCCESS } from 'constants/action-types';

const initialState = {
  loaded: false,
  data: {}
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case APP_INIT_SUCCESS: {
      const data = action.result;
      return { ...state, loaded: true, data };
    }
    default:
      return state;
  }
}
