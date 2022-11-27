import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <div className="Admin_Admin">
      <div className="Rectangle6" />
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
    </div>
  );
}

export default Admin;
