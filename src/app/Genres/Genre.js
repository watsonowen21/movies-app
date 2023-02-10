import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../store/actions/genre-actions";
import GenreModal from "./GenreModal";
import GenreList from "./GenreList";

const Genre = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.genre.error);
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
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-primary">Genre List</h1>
      {error && <p>An error occured: {error.message}</p>}
      <GenreList handleEdit={handleEdit} handleDelete={handleDelete} />
      <GenreModal
        showModal={show}
        closeModal={handleClose}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default Genre;
