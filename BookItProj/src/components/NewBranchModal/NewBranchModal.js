
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./NewBranchModal.css";
import NewBranchDetails from "../NewBranchDetails/NewBranchDetails";
import NewBranchWorkingHours from "../NewBranchWorkingHours/BranchWorkingHours";
// import ServiceModal from "../ServiceModal/ServiceModal";


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
          <NewBranchDetails
            data={props}
            branchId={props.data && props.data.id}
            saveCloseModal={handleSaveChanges}
            closeModal={handleClose}
            className="infoModal"
          />
        ) : null}

        {props.show == "workHoursModal" ? (
          <NewBranchWorkingHours
            id={props.data.id}
            className="workHoursModal"
          />
        ) : null}
      </Modal.Body>
    </Modal>
  );
}

export default BranchModal;
