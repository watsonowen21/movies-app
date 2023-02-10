import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from "../actions/movie-actions";

const initialState = {
  movies: [],
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        error: null,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default movieReducer;
