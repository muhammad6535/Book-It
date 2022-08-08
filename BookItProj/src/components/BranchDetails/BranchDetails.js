import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";

function BranchDetails(props) {
  return (
    <Form>
      <TextField
        margin="normal"
        required
        fullWidth
        name="name"
        label="Name"
        id="name"
        autoComplete="current-password"
        defaultValue= {props.data.data.name}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        defaultValue= {props.data.data.email}
      />
      {/* <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        defaultValue="123456"
      /> */}
      <TextField
        margin="normal"
        required
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
        autoFocus
        defaultValue= {props.data.data.address}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="Phone"
        label="Phone"
        name="Phone"
        autoComplete="Phone"
        autoFocus
        defaultValue= {props.data.data.phone}
      />
    </Form>
  );
}

export default BranchDetails;
