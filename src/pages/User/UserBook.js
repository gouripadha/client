import React from "react";
import "./UserBook.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserBook() {
  const [CaregiverList, setCaregiverList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/caregivers");
    const data = await response.json();
    setCaregiverList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="UserCaregiver">
      <div className="Rectangle6" />
      <Link to="/user/caregiver">
        <span className="CareTakers">Caregivers</span>
      </Link>
      <span className="BabyOwls">BabyOwls.</span>

      <Link to="/user/teacher">
        <span className="Teachers">Teachers</span>
      </Link>
      <Link to="/user/doctor">
        <span className="Doctors">Doctors</span>
      </Link>
      <Link to="/user/activities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <Link to="/user/profile">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />

      <span className="DailyActivities_1">Book Caregivers</span>

      {CaregiverList.map((val, key) => {
        return (
          //caregiver_id, caregiver_name, shift_start, shift_end, Room
          <div className="individual">
            <span className="ActivityName">{val.caregiver_name} </span>
            <span className="ActivityIdXXX">
              Shift Start: {val.shift_start}
            </span>
            <span className="ActivityIdXXX">Shift End: {val.shift_end}</span>

            <span className="Durationxhrs">Room: {val.Room} </span>
          </div>
        );
      })}
    </div>
  );
}

export default UserBook;
