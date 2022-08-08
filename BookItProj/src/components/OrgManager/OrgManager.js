import { Button } from "bootstrap";
import React, { Component, useEffect } from "react";
import Branch from "../Branch/Branch";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./OrgManager.css";
import useFetch from "../../useFetch";

function OrgManager() {
  let { data: branches } = useFetch(
    `http://localhost:55100/api/Branch/Branches?orgId=1`
  );
  return (
    <div>
      <NavBar />
      <div className="grid-container">
        {branches && branches.map((branch) => (
          <Branch
            key={branch.id}
            data={branch}
          />
        ))}
        {/* <Branch name= "aaa" email="aaaa" className="grid-item" />
          <Branch name= "aaa2" email="aaaa" className="grid-item" />
          <Branch name= "aa3a" email="aaaa" className="grid-item" />
          <Branch name= "aa4a" email="aaaa" className="grid-item" />
          <Branch name= "a5aa" email="aaaa" className="grid-item" />
          <Branch name= "aa6a" email="aaaa" className="grid-item" /> */}
      </div>
      <Footer />
    </div>
  );
}

export default OrgManager;
