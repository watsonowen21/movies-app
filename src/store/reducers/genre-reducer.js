import * as types from "../actions/action-types";

const initialState = {
  genres: [],
  loading: false,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_GENRES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres,
        loading: false,
      };
    case types.ADD_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.concat(action.genre),
        loading: false,
      };
    case types.UPDATE_GENRE_SUCCESS:
      return {
        ...state,
        genres: state.genres.map((genre) =>
          genre.id === action.genre.id
            ? { ...genre, name: action.genre.name }
            : genre
        ),
        loading: false,
      };
    case types.DELETE_GENRE_SUCCESS:
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
