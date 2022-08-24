import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./BranchModal.css";
import BranchDetails from "../BranchDetails/BranchDetails";
import BranchWorkingHours from "../BranchWorkingHours/BranchWorkingHours";

function BranchModal(props) {
  // const [show, setShow] = useState(false);
  const handleClose = () => props.setShow("");
  const handleSaveChanges = () => {
    handleClose();
  };

  return (
        <Modal className="BranchModal" show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Branch Details</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalBody">
            {props.show == "infoModal" ? (
              <BranchDetails
                data={props}
                branchId={props.data &&  props.data.id }
                saveCloseModal={handleSaveChanges}
                closeModal={handleClose}
                className="infoModal"
              />
            ) : null}

            {props.show == "workHoursModal" ? (
              <BranchWorkingHours
                id={props.data.id}
                className="workHoursModal"
              />
            ) : null}
          </Modal.Body>
        </Modal>
    
  );
}

export default BranchModal;
