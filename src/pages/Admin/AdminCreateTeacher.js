import React from "react";
import "./AdminCreateTeacher.css";
import { useState } from "react";
import Axios from "axios";

function AdminCreateTeacher() {
  const [TeacherName, setTeacherName] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Subject, setSubject] = useState("");
  const [AgeGroup, setAgeGroup] = useState(0);

  const addTeacher = () => {
    Axios.post("http://localhost:3001/createteacher", {
      TeacherName: TeacherName,
      Qualification: Qualification,
      Subject: Subject,
      AgeGroup: AgeGroup,
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
      <span className="CreateANewDailyActivity">Add A New Teacher</span>
      <span className="Children">Children</span>

      <div className="info">
        <label>Teacher Name</label>
        <input
          type="text"
          onChange={(event) => {
            setTeacherName(event.target.value);
          }}
        />
        <label>Qualification</label>
        <input
          type="text"
          onChange={(event) => {
            setQualification(event.target.value);
          }}
        />
        <label>Subject</label>
        <input
          type="text"
          onChange={(event) => {
            setSubject(event.target.value);
          }}
        />
        <label>Age Group</label>
        <input
          type="number"
          onChange={(event) => {
            setAgeGroup(event.target.value);
          }}
        />

        <button onClick={addTeacher}>Add Teacher</button>
      </div>
    </div>
  );
}

export default AdminCreateTeacher;
