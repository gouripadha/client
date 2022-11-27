import React from "react";
import "./AdminCreateCaregiver.css";
import { useState } from "react";
import Axios from "axios";

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
      <div className="Rectangle6" />
      <span className="BabyOwls">BabyOwls.</span>
      <span className="Teachers">Teachers</span>
      <span className="CareTakers">Caregivers</span>
      <span className="Doctors">Doctors</span>
      <span className="DailyActivities">Daily Activities</span>
      <span className="CreateANewDailyActivity">Add A New Caretaker</span>
      <span className="Children">Children</span>

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
