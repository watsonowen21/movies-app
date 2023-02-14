import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../store/actions/movie-actions";
import MovieModal from "./MovieModal";
import TableList from "../components/TableList";
import { Button } from "react-bootstrap";

const MovieList = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.movie.error);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const movies = useSelector((state) => state.movie.movies);
  const headers = ["Id", "Name", "Actions"];

  const data = movies.map((movie) => [
    movie.id,
    movie.name,
    <>
      <Button onClick={() => handleEdit(movie)}>Edit</Button>
      <Button variant="secondary" onClick={() => handleDelete(movie)}>
        Delete
      </Button>
    </>,
  ]);

  const handleClose = () => setShow(false);

  const handleEdit = (movie) => {
    setSelectedItem(movie);
    setShow(true);
  };

  const handleDelete = (movie) => {
    alert(movie.name);
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-primary">Movie List</h1>
      {error && <p>An error occured: {error.message}</p>}
      <TableList headers={headers} data={data} />
      <MovieModal
        showModal={show}
        closeModal={handleClose}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default MovieList;
