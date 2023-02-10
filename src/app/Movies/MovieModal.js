import React from "react";
import { Modal, Button } from "react-bootstrap";

const MovieModal = (props) => {
  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {props.selectedItem.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              defaultValue={props.selectedItem.name}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieModal;
