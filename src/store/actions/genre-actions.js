import axios from "axios";
import { toast } from "react-toastify";
import * as types from "./action-types";

export const fetchGenresRequest = () => ({
  type: types.FETCH_GENRES_REQUEST,
});

export const fetchGenresSuccess = (genres) => ({
  type: types.FETCH_GENRES_SUCCESS,
  genres,
});

export const addGenreSuccess = (genre) => ({
  type: types.ADD_GENRE_SUCCESS,
  genre,
});

export const updateGenreSuccess = (genre) => ({
  type: types.UPDATE_GENRE_SUCCESS,
  genre,
});

export const deleteGenreSuccess = (id) => ({
  type: types.DELETE_GENRE_SUCCESS,
  id,
});

export const fetchGenres = () => {
  return (dispatch) => {
    dispatch(fetchGenresRequest());
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
        toast.error("Error fetching genres: " + error.message);
      });
  };
};

export const addGenre = (genre) => {
  return (dispatch) => {
    axios
      .post(`https://localhost:7023/api/Genres/`, genre)
      .then((response) => {
        genre.id = response.data.id;
        dispatch(addGenreSuccess(genre));
        toast.success("Add Genre Successful");
      })
      .catch((error) => {
        toast.error("Add Genre Not Succesful");
      });
  };
};

export const updateGenre = (genre) => {
  return async function (dispatch) {
    axios
      .put(`https://localhost:7023/api/Genres/${genre.id}`, genre)
      .then((response) => {
        dispatch(updateGenreSuccess(genre));
        toast.success("Update Genre Successful");
      })
      .catch((error) => {
        toast.error("Update Genre Not Succesful");
      });
  };
};

export const deleteGenre = (id) => {
  return async function (dispatch) {
    axios
      .delete(`https://localhost:7023/api/Genres/${id}`)
      .then((response) => {
        dispatch(deleteGenreSuccess(id));
        toast.success("Deleted Genre Successful");
      })
      .catch((error) => {
        toast.error("Delete Genre Not Succesful");
      });
  };
};
