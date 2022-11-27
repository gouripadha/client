import React from "react";
import "./AdminCreateCaregiver.css";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function AdminCreateCaregiver() {
  const [CaregiverName, setCaregiverName] = useState("");
  const [ShiftStart, setShiftStart] = useState("");
  const [ShiftEnd, setShiftEnd] = useState("");
  const [Room, setRoom] = useState(0);

  const addCaregiver = () => {
    Axios.post("http://localhost:3001/createcaregiver", {
      CaregiverName: CaregiverName,
      ShiftStart: ShiftStart,
      ShiftEnd: ShiftEnd,
      Room: Room,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="AdminCreateDailyActivities_AdminCreateDailyActivities">
      <span className="BabyOwls">BabyOwls.</span>
      <Link to="/admin/caregiver">
        <span className="CareTakers">Caregivers</span>
      </Link>
      <Link to="/admin/teacher">
        <span className="Teachers">Teachers</span>
      </Link>
      <Link to="/admin/doctor">
        <span className="Doctors">Doctors</span>
      </Link>
      <Link to="/admin/dailyactivities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <Link to="/admin/children">
        <span className="Children">Children</span>
      </Link>

      <div className="info">
        <label>Caregiver Name</label>
        <input
          type="text"
          onChange={(event) => {
            setCaregiverName(event.target.value);
          }}
        />
        <label>Shift Start Time</label>
        <input
          type="time"
          onChange={(event) => {
            setShiftStart(event.target.value);
          }}
        />
        <label>Shift End Time</label>
        <input
          type="time"
          onChange={(event) => {
            setShiftEnd(event.target.value);
          }}
        />
        <label>Room</label>
        <input
          type="number"
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />

        <button onClick={addCaregiver}>Add Caregiver</button>
      </div>
    </div>
  );
}

export default AdminCreateCaregiver;
