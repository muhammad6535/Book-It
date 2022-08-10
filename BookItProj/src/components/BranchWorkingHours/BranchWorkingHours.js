import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./BranchWorkingHours.css";
import TimeInputs from "./TimeInputs";
import useFetch from "../../useFetch";
import apiPath from '../../apiPath'

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
  let { data: workHours } = useFetch(
    apiPath + `/WorkHours/WorkHours?branchId=`+ props.id
  );
  return (
    <Form>
      {/* {JSON.stringify(workHours)}; */}
      {workHours && workHours.map((wh, index) => {
        return <TimeInputs title={days[index]} data={wh}/>;
      })}
    </Form>
  );
}
export default BranchWorkingHours;
