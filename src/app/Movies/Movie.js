import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/actions/movie-actions";
import MovieModal from "./MovieModal";
import MovieList from "./MovieList";

const Movie = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.movie.error);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClose = () => setShow(false);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleDelete = (item) => {
    alert(item.name);
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-primary">Movie List</h1>
      {error && <p>An error occured: {error.message}</p>}
      <MovieList handleEdit={handleEdit} handleDelete={handleDelete} />
      <MovieModal
        showModal={show}
        closeModal={handleClose}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Movie;
