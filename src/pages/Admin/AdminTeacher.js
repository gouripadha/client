import React from "react";
import "./AdminTeacher.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AdminTeacher() {
  const [TeacherList, setTeacherList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/teachers");
    const data = await response.json();
    setTeacherList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteTeacher = (teacher_id) => {
    Axios.delete(`http://localhost:3001/deleteteacher/${teacher_id}`).then(
      (response) => {
        setTeacherList(
          TeacherList.filter((val) => {
            return val.teacher_id !== teacher_id;
          })
        );
      }
    );
  };

  return (
    <div className="AdminTeacher">
      <div className="Rectangle6" />
      <Link to="/admin">
        <span className="BabyOwls">BabyOwls.</span>
      </Link>
      <span className="Teachers">Teachers</span>
      <Link to="/admin/caregiver">
        <span className="CareTakers">Caregivers</span>
      </Link>
      <Link to="/admin/doctor">
        <span className="Doctors">Doctors</span>
      </Link>
      <Link to="/admin/dailyactivities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <span className="DailyActivities_1">Teachers</span>
      <Link to="/admin/children">
        <span className="Children">Children</span>
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
            <span className="Durationxhrs">
              Age Group: {val.age_group}{" "}
              <button
                className="Deletebutton"
                onClick={() => {
                  deleteTeacher(val.teacher_id);
                }}
              >
                Delete Teacher
              </button>
            </span>
            <span className="ActivityIdXXX">Teacher Id: T{val.teacher_id}</span>
          </div>
        );
      })}

      <Link to="/admin/create/teacher">
        <button className="Addbutton">Add Teacher</button>
      </Link>
    </div>
  );
}

export default AdminTeacher;
