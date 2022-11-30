import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./User.css";

function User() {
  return (
    <div className="User">
      <div className="Rectangle6" />
      <span className="BabyOwls">BabyOwls.</span>
      <Link to="/user/caregiver">
        <span className="CareTakers">Caregivers</span>
      </Link>
      <Link to="/user/teacher">
        <span className="Teachers">Teachers</span>
      </Link>
      <Link to="/user/doctor">
        <span className="Doctors">Doctors</span>
      </Link>
      <Link to="/user/dailyactivities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <Link to="/user/profile">
        <span className="Children">Children</span>
      </Link>
    </div>
  );
}

export default User;
