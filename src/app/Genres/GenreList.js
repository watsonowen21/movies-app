import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/actions/genre-actions";
import GenreModal from "./GenreModal";
import TableList from "../components/TableList";
import { Button } from "react-bootstrap";

const GenreList = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.genre.error);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const genres = useSelector((state) => state.genre.genres);
  const headers = ["Id", "Name", "Actions"];

  const data = genres.map((genre) => [
    genre.id,
    genre.name,
    <>
      <Button onClick={() => handleEdit(genre)}>Edit</Button>
      <Button variant="secondary" onClick={() => handleDelete(genre)}>
        Delete
      </Button>
    </>,
  ]);

  const handleClose = () => setShow(false);

  const handleEdit = (genre) => {
    setSelectedItem(genre);
    setShow(true);
  };

  const handleDelete = (genre) => {
    alert(genre.name);
  };

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-primary">Genre List</h1>
      {error && <p>An error occured: {error.message}</p>}
      <TableList headers={headers} data={data} />
      <GenreModal
        showModal={show}
        closeModal={handleClose}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default GenreList;
