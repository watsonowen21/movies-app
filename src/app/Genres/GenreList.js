import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGenre, fetchGenres } from "../../store/actions/genre-actions";
import GenreModal from "./GenreModal";
import TableList from "../components/TableList";
import { Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const GenreList = () => {
  const dispatch = useDispatch();
  const { genres, loading } = useSelector((state) => state.genre);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

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

  const handleClose = () => {
    setShow(false);
  };

  const handleAdd = () => {
    setSelectedItem();
    setShow(true);
  };

  const handleEdit = (genre) => {
    setSelectedItem(genre);
    setShow(true);
  };

  const handleDelete = (genre) => {
    if (window.confirm("Do you really want to delete: " + genre.name)) {
      dispatch(deleteGenre(genre.id));
    }
  };

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(fetchGenres());
    }
  }, [dispatch, genres]);

  return (
    <div className="container">
      <h1 className="text-primary">Genre List</h1>
      <Button onClick={() => handleAdd()}>Add New Genre</Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <TableList headers={headers} data={data} />
          <GenreModal
            showModal={show}
            closeModal={handleClose}
            selectedItem={selectedItem}
          />
        </div>
      )}
    </div>
  );
};

export default GenreList;
