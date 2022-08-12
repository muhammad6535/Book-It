import React, { useState } from "react";
import "./AppointementsList.css";
import useFetch from "../../useFetch";
import apiPath from "../../apiPath";
import ActionItemForum from "./ActionItemForum";
import ActionItemList from "./ActionItemList";

const AppointementsList = () => {
  const branchId = "1";
  const { data: appointments } = useFetch(
    apiPath + `/Appointment/Appointments?BranchId=` + branchId
  );
  const [state, setState] = useState({
    ActionItemsList: [
      {
        ActionItem: "ffff",
        DueDate: "2018-08-09",
      },
      {
        ActionItem: "dddd",
        DueDate: "2018-08-09",
      },
    ],
  });

  const addActionItemToState = (actionItem, dueDate) => {
    let toBeAddedActionItem = {
      ActionItem: actionItem,
      DueDate: dueDate,
    };
    setState((prevState) => ({
      ActionItemsList: prevState.ActionItemsList.concat(toBeAddedActionItem),
    }));
  };
  const deleteActionItemFromState = (index) => {
    const ActionItemsList = [...state.ActionItemsList];
    ActionItemsList.splice(index, 1);
    setState({ ActionItemsList });
  };

  return (
    <div>
      <ActionItemForum addActionItemToState={addActionItemToState} />
      <ActionItemList
        actionItemsList={state.ActionItemsList}
        deleteActionItemFromState={deleteActionItemFromState}
      />
    </div>
  );
};

export default AppointementsList;
