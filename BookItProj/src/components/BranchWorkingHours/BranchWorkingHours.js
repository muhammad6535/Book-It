import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./BranchWorkingHours.css";
import TimeInputs from "./TimeInputs";

let items = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default class BranchWorkingHours extends Component {
  render() {
    return (
      <Form>
        {items.map((item, index) => {
          return <TimeInputs title={item} />;
        })}
      </Form>
    );
  }
}
