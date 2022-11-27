import React from "react";
import "./AdminCreateDoctor.css";
import { useState } from "react";
import Axios from "axios";

function AdminCreateDoctor() {
  const [DoctorName, setDoctorName] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Specialization, setSpecialization] = useState("");

  const addDoctor = () => {
    Axios.post("http://localhost:3001/createdoctor", {
      DoctorName: DoctorName,
      Qualification: Qualification,
      Specialization: Specialization,
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
      <span className="CreateANewDailyActivity">Add A New Doctor</span>
      <span className="Children">Children</span>

      <div className="info">
        <label>Doctor Name</label>
        <input
          type="text"
          onChange={(event) => {
            setDoctorName(event.target.value);
          }}
        />
        <label>Qualification</label>
        <input
          type="text"
          onChange={(event) => {
            setQualification(event.target.value);
          }}
        />
        <label>Specialization</label>
        <input
          type="text"
          onChange={(event) => {
            setSpecialization(event.target.value);
          }}
        />

        <button onClick={addDoctor}>Add Doctor</button>
      </div>
    </div>
  );
}

export default AdminCreateDoctor;
