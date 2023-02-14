import * as types from "../actions/action-types";

const initialState = {
  movies: [],
  loading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        loading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
