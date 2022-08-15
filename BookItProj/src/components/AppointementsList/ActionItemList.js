import React from "react";
import "./AppointementsList.css";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import AppointmentScreen from "../SupportRep/AppointmentScreen";

const ActionItemList = (props) => {
  const emptyList = (length) => {
    if (length === 0) {
      return (
        <tr style={{ "text-align": "center" }}>
          <td colSpan="3">No Record</td>
        </tr>
      );
    }
  };

  const deleteActionItemFromState = (index) => () => {
    props.deleteActionItemFromState(index);
  };

  return (
    <>
      <div className="container tableList">
        <table className="table">
          <thead>
            <tr>
              <th>Appointment Num</th>
              <th>Customer Name</th>
              <th>Service Type</th>
              <th>Time</th>
              <th> Next </th>
            </tr>
          </thead>
          <tbody>
            {emptyList(props.actionItemsList && props.actionItemsList.length)}
            {!!props.actionItemsList.length &&
              props.actionItemsList.map((actionItem, i) => (
                <tr key={i + 1}>
                  <td>{actionItem.id}</td>
                  <td>{actionItem.customerName}</td>
                  <td>
                    {actionItem.serviceId} {console.log(actionItem)}
                  </td>
                  <td>
                    {actionItem.date.split("T")[1]} {console.log(actionItem)}
                  </td>

                  <td>
                    {/* <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteActionItemFromState(i)}
                >
                  
                  <span aria-hidden="true">&times;</span>
                </button> */}
                    <CheckCircleSharpIcon
                      style={{ color: "green" }}
                      type="button"
                      onClick={deleteActionItemFromState(i)}
                    ></CheckCircleSharpIcon>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <AppointmentScreen
        appointment={props.actionItemsList.length && props.actionItemsList[0]}
      />
    </>
  );
};

export default ActionItemList;
