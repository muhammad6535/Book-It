import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./BranchWorkingHours.css";

function TimeInputs(props) {

  {console.log(props.data);}
  return (
    <div>
      <label>{props.title}:</label>
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
        />
      </div>
    </div>
  );
}
export default TimeInputs;
