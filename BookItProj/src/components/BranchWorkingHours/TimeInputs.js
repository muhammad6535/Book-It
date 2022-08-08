import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./BranchWorkingHours.css";

export default class TimeInputs extends Component {
  render() {
    return (
      <div>
        <label>{this.props.title}:</label>
        <div className="workingHours">
          <TextField
            margin="normal"
            required
            fullWidth
            name="from"
            label="Working Hours: From"
            id="from"
            autoComplete="from"
            defaultValue="08:30"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="to"
            label="Working Hours: To"
            id="to"
            autoComplete="to"
            defaultValue="12:30"
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
            defaultValue="08:30"
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="to"
            label="Break: To"
            id="to"
            autoComplete="to"
            defaultValue="12:30"
          />
        </div>
      </div>
    );
  }
}
