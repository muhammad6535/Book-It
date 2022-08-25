import React, { Component, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
import "./NewBranchDetails.css";
import axios from "axios";
import apiPath from "../../apiPath";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ServiceModal from "../ServiceModal/ServiceModal";

function BranchDetails(props) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({
    name: "Service Type",
    id: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [branchId, setBranchId] = useState("");

  const handleSubmit = async (e) => {
    
    props.saveCloseModal();
  };
  return (
    <Form onSubmit={handleSubmit} className="containerr">
      <TextField
        className="textInput"
        margin="normal"
        required
        fullWidth
        name="name"
        label="Name"
        id="name"
        autoComplete="current-password"
        defaultValue={name}
        autoFocus
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        className="textInput"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        defaultValue={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        className="textInput"
        margin="normal"
        required
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
        defaultValue={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <TextField
        className="textInput"
        margin="normal"
        required
        fullWidth
        id="Phone"
        label="Phone"
        name="Phone"
        autoComplete="Phone"
        defaultValue={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />

      <ServiceModal className="serviceModal" services={services} setServices={setServices} />
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Next
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default BranchDetails;
