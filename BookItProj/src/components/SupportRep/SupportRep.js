import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import AppointementsList from "../AppointementsList/AppointementsList";
import AppointmentScreen from "./AppointmentScreen";
import "./SupportRep.css";

function SupportRep() {
  return (
    <div className="fullScreen">
      <NavBar />
      <div className="container">
        <AppointementsList />
        <AppointmentScreen />
      </div>
      <Footer />
    </div>
  );
}

export default SupportRep;
