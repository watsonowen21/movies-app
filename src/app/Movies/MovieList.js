import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";

const MovieList = (props) => {
  const movies = useSelector((state) => state.movie.movies);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <Button onClick={() => props.handleEdit(item)}>Edit</Button>
              <Button
                variant="secondary"
                onClick={() => props.handleDelete(item)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MovieList;
