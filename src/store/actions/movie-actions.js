import axios from "axios";
import * as types from "./action-types";
import { toast } from "react-toastify";

export const fetchMoviesRequest = () => ({
  type: types.FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: types.FETCH_MOVIES_SUCCESS,
  movies,
});

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(fetchMoviesRequest());
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
        toast.error("Error fetching genres: " + error.message);
      });
  };
};
