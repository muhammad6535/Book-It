// import { Button } from "bootstrap";
import React, { Component, useEffect, useState } from "react";
import Branch from "../Branch/Branch";
import Footer from "../Footer/Footer";
import NavBarOrgManager from "../NavBarOrgManager/NavBarOrgManager";
import "./OrgManager.css";
import useFetch from "../../useFetch";
import apiPath from "../../apiPath";
import NewBranchModal from "../NewBranchModal/NewBranchModal";
import { useLocation } from "react-router-dom";

function OrgManager(props) {
  const location = useLocation();
  let { data: branches } = useFetch(
    apiPath + `/Branch/Branches?orgId=${location.state.orgId}`
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow("");
  const handleSaveChanges = () => {
    handleClose();
  };
  return (
    <div>
      <NavBarOrgManager show={show} setShow={setShow} />
      <div className="grid-container">
        {branches &&
          branches.map((branch) => <Branch key={branch.id} data={branch} />)}
      </div>
      <NewBranchModal show={show} setShow={setShow} />

      <Footer />
    </div>
  );
}

export default OrgManager;
