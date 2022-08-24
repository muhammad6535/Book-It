import React, { useState } from "react";
import "./AppointementsList.css";
import useFetch from "../../useFetch";
import apiPath from "../../apiPath";
import axios from "axios";
import ActionItemList from "./ActionItemList";

function ActionItemForum() {
  // const branchId = "1";
  // const url =
  //   apiPath +
  //   `/Appointment/Appointments?BranchId=` +
  //   branchId +
  //   `&date=` +
  //   dueDate;

  //   const { data: appointments } = useFetch(
  //     url
  //   );

  const [state, setState] = useState([
    // {
    // ActionItemsList: [
    //   {},
    //   // {
    //   //   ActionItem: "ffff",
    //   //   DueDate: "2018-08-09",
    //   // },
    //   // {
    //   //   ActionItem: "dddd",
    //   //   DueDate: "2018-08-09",
    //   // },
    // ],
    // }
  ]);
  const handleChange = (event) => {
    event.persist();
    // this.setState({ actionItem: event.target.value });
    setState((prevState) => ({
      actionItem:
        event.target.name === "actionItem"
          ? event.target.value
          : prevState.actionItem,
      dueDate:
        event.target.name === "dueDate"
          ? event.target.value
          : prevState.dueDate,
    }));
  };

  const deleteActionItemFromState = (index) => {
    const ActionItemsList = [...state.ActionItemsList];
    ActionItemsList.splice(index, 1);
    setState({ ActionItemsList });
  };

  const addActionItemToState = (actionItem, dueDate) => {
    const branchId = "1";
    const url =
      apiPath +
      `/Appointment/Appointments?BranchId=` +
      branchId +
      `&date=` +
      dueDate;
    const appointments = axios.get(url).then((res) => {
      parseAppointments(res.data);
    });

    // let toBeAddedActionItem = {
    //   ActionItem: actionItem,
    //   DueDate: dueDate,
    // };
    // setState((prevState) => ({
    //   // ActionItemsList: prevState.ActionItemsList.concat(toBeAddedActionItem),
    // }));
  };

  function parseAppointments(res) {
    setState(res);
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    addActionItemToState(state.actionItem, state.dueDate);
    // setState((res) => (
    //   {
    //   actionItem: res,
    //   dueDate: res,
    // }));
  };

  return (
    <>
      <div className="formList">
        <form onSubmit={handleSubmission}>
          <div className="form-group">
            {/* <label for="actionItem">Action Item:</label>
            <input
              type="text"
              className="form-control"
              id="actionItem"
              onChange={this.handleChange}
              value={this.state.actionItem}
              name="actionItem"
              required
            /> */}
          </div>
          <div className="form-group">
            <label for="dueDate">Due Date:</label>
            <input
              type="Date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              onChange={handleChange}
              value={state.dueDate}
              required
            />
          </div>
          <button type="submit" className="btn btn-default addBtn">
            Search
          </button>
        </form>
      </div>
      <ActionItemList
        actionItemsList={state}
        deleteActionItemFromState={deleteActionItemFromState}
      />
    </>
  );
}

export default ActionItemForum;
