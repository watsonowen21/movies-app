import axios from "axios";
import { toast } from "react-toastify";

export const FETCH_GENRES_REQUEST = "FETCH_GENRES_REQUEST";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const ADD_GENRE_SUCCESS = "ADD_GENRE_SUCCESS";
export const UPDATE_GENRE_SUCCESS = "UPDATE_GENRE_SUCCESS";
export const DELETE_GENRE_SUCCESS = "DELETE_GENRE_SUCCESS";

export const featchGenresRequest = () => ({
  type: FETCH_GENRES_REQUEST,
});

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  genres,
});

export const addGenreSuccess = (genre) => ({
  type: ADD_GENRE_SUCCESS,
  genre,
});

export const updateGenreSuccess = (genre) => ({
  type: UPDATE_GENRE_SUCCESS,
  genre,
});

export const deleteGenreSuccess = (id) => ({
  type: DELETE_GENRE_SUCCESS,
  id,
});

export const fetchGenres = () => {
  return (dispatch) => {
    dispatch(featchGenresRequest());
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
        toast.success("Add Genre Successfull");
      })
      .catch((error) => {
        toast.error("Add Genre Not Succesfull");
      });
  };
};

export const updateGenre = (genre) => {
  return async function (dispatch) {
    axios
      .put(`https://localhost:7023/api/Genres/${genre.id}`, genre)
      .then((response) => {
        dispatch(updateGenreSuccess(genre));
        toast.success("Update Genre Successfull");
      })
      .catch((error) => {
        toast.error("Update Genre Not Succesfull");
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
        toast.error("Delete Genre Not Succesfull");
      });
  };
};
