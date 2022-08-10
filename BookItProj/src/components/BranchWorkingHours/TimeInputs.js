import React, { Component, useState } from "react";
import TextField from "@mui/material/TextField";
import "./BranchWorkingHours.css";

function TimeInputs(props) {
  const [checked, setChecked] = useState(props.data.o.isDayOff);
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="timeInputs">
      <label>{props.title}: </label>
      <label className="checkBox">
        <input
          type="checkbox"
          onClick={handleClick}
          // checked={props.data.o.isDayOff}
          defaultChecked = {props.data.o.isDayOff}
        />{" "}
        Is Day Off
      </label>

      <div className="workingHours">
        <TextField
          margin="normal"
          required
          fullWidth
          name="from"
          label="Working Hours: From"
          id="from"
          autoComplete="from"
          defaultValue={props.data.workFrom}
          disabled={checked}
          // defaultChecked = {props.data.o.isDayOff}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="to"
          label="Working Hours: To"
          id="to"
          autoComplete="to"
          defaultValue={props.data.workTo}
          disabled={checked}
          // defaultChecked = {props.data.o.isDayOff}
        />
      </div>
      <div className="workingHours">
        <TextField
          margin="normal"
          required
          fullWidth
          name="from"
          label="Break: From"
          id="from"
          autoComplete="from"
          defaultValue={props.data.breakFrom}
          disabled={checked}
          // defaultChecked = {props.data.o.isDayOff}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="to"
          label="Break: To"
          id="to"
          autoComplete="to"
          defaultValue={props.data.breakTo}
          disabled={checked}
          // defaultChecked = {props.data.o.isDayOff}
        />
      </div>
      <div className="bottumBorder"></div>
    </div>
  );
}

export default TimeInputs;
