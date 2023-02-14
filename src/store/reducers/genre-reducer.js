import {
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  UPDATE_GENRE_SUCCESS,
  UPDATE_GENRE_ERROR,
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
    case UPDATE_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.map((genre) =>
          genre.id === action.genre.id
            ? { ...genre, name: action.genre.name }
            : genre
        ),
        error: null,
      };
    case UPDATE_GENRE_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default genreReducer;
