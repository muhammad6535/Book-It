import React, { Component } from "react";
import Branch from "../Branch/Branch";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./OrgManager.css";

export class OrgManager extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="grid-container">
          <Branch className="grid-item" />
          <Branch className="grid-item" />
          <Branch className="grid-item" />
          <Branch className="grid-item" />
          <Branch className="grid-item" />
          <Branch className="grid-item" />
          <Branch className="grid-item" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrgManager;
