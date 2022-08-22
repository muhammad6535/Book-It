import React, { Component, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Form from "react-bootstrap/Form";
// import Select from '@mui/material/Select';
import "./BranchDetails.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import apiPath from "../../apiPath";

function BranchDetails(props) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({
    name: "Service Type",
    id: "",
  });

  const handleChange = (event) => {
    console.log("event", event.target);
    // setSelectedService(event.target.value);
  };
  useEffect(() => {
    getServices();
  }, []);

  async function getServices() {
    let services = await (
      await axios.get(
        apiPath + `/ServiceType/ServiceTypes?branchId=${props.branchId}`
      )
    )?.data;

    setServices(services);
    console.log("services", services);
  }
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
        defaultValue={props.data.data.name}
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
        defaultValue={props.data.data.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="address"
        label="Address"
        name="address"
        autoComplete="address"
        autoFocus
        defaultValue={props.data.data.address}
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
        defaultValue={props.data.data.phone}
      />
      <FormControl fullWidth style={{ marginTop: "10px" }}>
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
          // defaultValue={selectedService?.value?.timeAvg}
        />
      ) : null}
      {JSON.stringify(selectedService)}
    </Form>
  );
}

export default BranchDetails;
