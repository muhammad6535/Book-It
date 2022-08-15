import React, { useState } from "react";
import "./AppointementsList.css";
import useFetch from "../../useFetch";
import apiPath from "../../apiPath";
import ActionItemForum from "./ActionItemForum";
import ActionItemList from "./ActionItemList";

const AppointementsList = () => {
  return (
    <div>
      <ActionItemForum />
    </div>
  );
};

export default AppointementsList;
