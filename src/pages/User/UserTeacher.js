import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "UserTeacher.css";

function UserTeacher(props) {
  const [TeacherList, setTeacherList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch(
      `http://localhost:3001/userteachers/${props.age}`
    );
    const data = await response.json();
    setTeacherList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="UserTeacher">
      <div className="Rectangle6" />
      <span className="BabyOwls">BabyOwls.</span>
      <span className="Teachers">Teachers</span>
      <Link to="/user/caregiver">
        <span className="CareTakers">Caregivers</span>
      </Link>
      <Link to="/user/doctor">
        <span className="Doctors">Doctors</span>
      </Link>
      <Link to="/user/dailyactivities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <span className="DailyActivities_1">Teachers</span>
      <Link to="/user/profile">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />

      {TeacherList.map((val, key) => {
        return (
          <div className="individual">
            <span className="ActivityName">{val.teacher_name} </span>
            <span className="ActivitydescriptionActivitydescriptionActivitydescriptionActivitydescription">
              {" "}
              {val.qualifications}
            </span>
            <span className="ActivitydescriptionActivitydescriptionActivitydescriptionActivitydescription">
              {" "}
              {val.subject}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default UserTeacher;
