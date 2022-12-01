import React from "react";
import "./AdminCreateDoctor.css";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="AdminCreateDoctor">
      <div className="Rectangle6" />
      <Link to="/admin">
        <span className="BabyOwls">BabyOwls.</span>
      </Link>
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
      <span className="CreateANewDailyActivity">Add A New Doctor</span>

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
