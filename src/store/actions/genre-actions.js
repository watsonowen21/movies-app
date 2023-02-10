import axios from "axios";

export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_ERROR = "FETCH_GENRES_ERROR";

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  genres,
});

export const fetchGenresError = (error) => ({
  type: FETCH_GENRES_ERROR,
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
