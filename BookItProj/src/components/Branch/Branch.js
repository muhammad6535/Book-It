import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./Branch.css";
import BranchDetails from "../BranchDetails/BranchDetails";
import BranchWorkingHours from "../BranchWorkingHours/BranchWorkingHours";

function Branch() {
  // const [branch, setBranch] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow("");

  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Branch Name</Card.Title>
        <Card.Text>
          <label>Name: aaa</label>
          <br />
          <label>Email: aaa@hotmail.com</label>
          <br />
        </Card.Text>

        <div className="cardButtons">
          <Button
            className="branchBtns editInfo"
            variant="primary"
            onClick={() => setShow("infoModal")}
          >
            Informations
          </Button>

          <Button
            className="branchBtns editWorkHours"
            variant="primary"
            onClick={() => setShow("workHoursModal")}
          >
            Work Hours
          </Button>
        </div>
        <Modal className="BranchModal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Branch Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            {show == "infoModal" ? (
              <BranchDetails className="infoModal" />
            ) : null}

            {show == "workHoursModal" ? (
              <BranchWorkingHours className="workHoursModal" />
            ) : null}
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