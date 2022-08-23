// import { Button } from "bootstrap";
import React, { Component, useEffect } from "react";
import Branch from "../Branch/Branch";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./OrgManager.css";
import useFetch from "../../useFetch";
import apiPath from '../../apiPath';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function OrgManager() {
  let { data: branches } = useFetch(
    apiPath + `/Branch/Branches?orgId=1`
  );
  return (
    <div>
      <NavBar />
      <div className="grid-container">
        { branches && branches.map((branch) => (
          <Branch
            key={branch.id}
            data={branch}
          />
        ))}

      </div>
      <Footer />
     
    </div>
  );
}

export default OrgManager;
