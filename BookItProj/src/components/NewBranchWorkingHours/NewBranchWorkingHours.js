import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import "./NewBranchWorkingHours.css";
import TimeInputs from "./NewTimeInputs";
import useFetch from "../../useFetch";
import apiPath from "../../apiPath";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function BranchWorkingHours(props) {
  const [dataToUpdate, setDataToUpdate] = useState([]);
  const [workHours, setWorkHours] = useState([]);
  // let { data: workHours } = useFetch(
  //   apiPath + `/WorkHours/WorkHours?branchId=` + props.id
  // );

  const handleSubmit = (e) => {
    console.log(workHours);

    // props.saveCloseModal();
  };

  return (
    <Form>
      {days &&
        days.map((wh, index) => {
          return (
            <TimeInputs
              title={days[index]}
              data={wh}
              dayNum={index}
              workHours={workHours}
              setWorkHours={setWorkHours}
              // branchId={props.id}
              // setDataToUpdate={setDataToUpdate}
              // dataToUpdate={dataToUpdate}
            />
          );
        })}
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Form>
  );
}
export default BranchWorkingHours;
