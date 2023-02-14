import axios from "axios";

export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_ERROR = "FETCH_GENRES_ERROR";
export const UPDATE_GENRE_SUCCESS = "UPDATE_GENRE_SUCCESS";
export const UPDATE_GENRE_ERROR = "UPDATE_GENRE_ERROR";

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  genres,
});

export const fetchGenresError = (error) => ({
  type: FETCH_GENRES_ERROR,
  error,
});

export const updateGenreSuccess = (genre) => ({
  type: UPDATE_GENRE_SUCCESS,
  genre,
});

export const updateGenreError = (error) => ({
  type: UPDATE_GENRE_ERROR,
  error,
});

export const fetchGenres = () => {
  return (dispatch) => {
    axios
      .get("https://localhost:7023/api/Genres")
      .then((response) => {
        const genres = response.data.map((genre) => ({
          id: genre.id,
          name: genre.name,
        }));
        dispatch(fetchGenresSuccess(genres));
      })
      .catch((error) => {
        dispatch(fetchGenresError(error));
      });
  };
};

export const updateGenre = (genre) => {
  return async function (dispatch) {
    axios
      .put(`https://localhost:7023/api/Genres/${genre.id}`, genre)
      .then((response) => {
        dispatch(updateGenreSuccess(genre));
      })
      .catch((error) => {
        dispatch(updateGenreError(error));
      });
  };
};
