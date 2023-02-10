import {
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
} from "../actions/genre-actions";

const initialState = {
  genres: [],
  error: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres,
        error: null,
      };
    case FETCH_GENRES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default genreReducer;
