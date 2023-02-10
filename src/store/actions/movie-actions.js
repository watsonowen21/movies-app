import axios from "axios";

export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error,
});

export const fetchMovies = () => {
  return (dispatch) => {
    axios
      .get("https://localhost:7023/api/Movies")
      .then((response) => {
        const movies = response.data.map((movie) => ({
          id: movie.id,
          name: movie.name,
        }));
        dispatch(fetchMoviesSuccess(movies));
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
};
