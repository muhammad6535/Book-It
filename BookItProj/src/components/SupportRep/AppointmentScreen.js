import { green } from "@mui/material/colors";
import { fontSize, fontStyle } from "@mui/system";
import "./AppointmentScreen.css";

function AppointmentScreen() {
  return (
    <>
      <div className="reminder">
        <div className="inner">
          <div>
            <text style={{ fontSize: 22, color: "#5CFF5C", fontStyle: "bold" }}>
              Current Appointment{" "}
            </text>{" "}
            <br />
            <text style={{ color: "white", fontStyle: "bold" }}>
              {" "}
              Name: Aaaa{" "}
            </text>
            <br />
            <text style={{ color: "white", fontStyle: "bold" }}>
              {" "}
              Time: 15:15{" "}
            </text>
            <br />
            <text style={{ color: "white", fontStyle: "bold" }}>
              Service: A{" "}
            </text>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentScreen;
