import React from "react";
import "./AdminCreateTeacher.css";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function AdminCreateTeacher() {
  const [TeacherName, setTeacherName] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Subject, setSubject] = useState("");
  const [AgeGroup, setAgeGroup] = useState(0);
  const [Aid, setAidGroup] = useState(0);

  const addTeacher = () => {
    Axios.post("http://localhost:3001/createteacher", {
      TeacherName: TeacherName,
      Qualification: Qualification,
      Subject: Subject,
      AgeGroup: AgeGroup,
      Aid: Aid,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="AdminCreateTecaher">
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
      <span className="CreateANewDailyActivity">Add A New Teacher</span>

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
        <label>Activity Id</label>
        <input
          type="number"
          onChange={(event) => {
            setAidGroup(event.target.value);
          }}
        />

        <button onClick={addTeacher}>Add Teacher</button>
      </div>
    </div>
  );
}

export default AdminCreateTeacher;
