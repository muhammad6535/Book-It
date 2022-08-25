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

  useEffect(() => {
    getServices();
  }, []);

  async function getServices() {
    let services = await (
      await axios.get(
        apiPath + `/ServiceType/ServiceTypes?branchId=${branchId}`
      )
    )?.data;
    setServices(services);
  }

  const handleSubmit = async (e) => {
    // console.log(name);
    // console.log(email);
    // console.log(address);
    // console.log(phone);

    // try {
    //   var selectedServiceParams = "";
    //   if (selectedService.id.length > 0) {
    //     selectedServiceParams = selectedService?.id
    //       ? `&serviceId=${selectedService?.id || ""}`
    //       : "" + selectedService?.timeAvg
    //       ? `&timeAvg=${selectedService?.timeAvg || ""}`
    //       : "" + selectedService?.name
    //       ? `&serviceName=${selectedService?.name || ""}`
    //       : "";
    //   }
    //   const response = axios.put(
    //     `${apiPath}/Branch/UpdateBranchDetails?` +
    //       `name=${name}` +
    //       `&email=${email}` +
    //       `&phone=${phone}` +
    //       `&branchId=${props.branchId}` +
    //       selectedServiceParams +
    //       `&address=${address}`
    //   );
    //   alert("Details has been updated successfully");
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
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
      {/* <FormControl fullWidth style={{ marginTop: "10px" }}>
        <InputLabel id="serviceType">Service Type</InputLabel>
        <Select
          className="serviceType"
          labelId="serviceType"
          id="serviceType"
          value={selectedService.id}
          label="Service Type"
          name="serviceType"
          autoComplete="serviceType"
        >
          {services.map((service) => (
            <MenuItem
              key={service.id}
              onClick={() =>
                setSelectedService({
                  branchId: service.branchId,
                  id: service.id,
                  name: service.name,
                  timeAvg: service.timeAvg,
                })
              }
              value={service.id}
            >
              {service.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        margin="normal"
        required
        fullWidth
        id="serviceName"
        label="Service Name"
        name="ServiceName"
        autoComplete="Service Name"
        onChange={(e) =>
          setSelectedService({ ...selectedService, name: e.target.value })
        }
        value={selectedService.name}
      />
      {selectedService?.timeAvg ? (
        <TextField
          margin="normal"
          required
          fullWidth
          id="serviceTimeAvg"
          label="service TimeAvg"
          name="serviceTimeAvg"
          autoComplete="Service TimeAvg"
          onChange={(e) =>
            setSelectedService({ ...selectedService, timeAvg: e.target.value })
          }
          value={selectedService?.timeAvg}
        />
      ) : null} */}
      
      <ServiceModal className="serviceModal"/>
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

export default BranchDetails;
