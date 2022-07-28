import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import './Branch.css'
import BranchDetails from "../BranchDetails/BranchDetails";
// import BranchDetails from "../BranchDetails/BranchDetails";
// import Modal from 'react-modal';

function Branch() {
  // const [branch, setBranch] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const openBranch = () => {
  //   setBranch(!branch);
  // };

  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Branch Name</Card.Title>
        <Card.Text>
          <label>Name: aaa</label>
          <br />
          <label>Name: aaa</label>
          <br />
        </Card.Text>

        <Button variant="primary" onClick={handleShow}>
          Edit Informations
        </Button>

        <Modal className="BranchModal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Branch Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <BranchDetails/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}

export default Branch;
