import {
  ADD_GENRE_SUCCESS,
  DELETE_GENRE_SUCCESS,
  FETCH_GENRES_REQUEST,
  FETCH_GENRES_SUCCESS,
  UPDATE_GENRE_SUCCESS,
} from "../actions/genre-actions";

const initialState = {
  genres: [],
  loading: false,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres,
        loading: false,
      };
    case ADD_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.concat(action.genre),
        loading: false,
      };
    case UPDATE_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.map((genre) =>
          genre.id === action.genre.id
            ? { ...genre, name: action.genre.name }
            : genre
        ),
        loading: false,
      };
    case DELETE_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.filter((genre) => genre.id !== action.id),
        loading: false,
      };
    default:
      return state;
  }
};

export default genreReducer;
