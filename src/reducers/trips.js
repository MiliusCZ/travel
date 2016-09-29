import { APP_LOAD, APP_INIT_SUCCESS } from 'constants/action-types';

const initialState = {
  loaded: false,
  trips: []
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, loaded: true };
    case APP_INIT_SUCCESS: {
      const trips = action.result.trips;
      return { ...state, loaded: true, trips };
    }
    default:
      return state;
  }
}
