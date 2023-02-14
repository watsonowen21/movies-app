import React from "react";
import { Modal, Button } from "react-bootstrap";
import GenreForm from "./GenreForm";

const GenreModal = (props) => {
  function handleSubmit() {
    props.closeModal();
  }

  return (
    <Modal show={props.showModal} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {props.selectedItem.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GenreForm item={props.selectedItem} onClose={props.closeModal} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="myForm">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenreModal;
