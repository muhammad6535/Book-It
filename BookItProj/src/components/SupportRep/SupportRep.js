import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AppointementsList from "../AppointementsList/AppointementsList";


export class SupportRep extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <AppointementsList/>
        <Footer />
      </div>
    );
  }
}

export default SupportRep;
