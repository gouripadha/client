import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./UserDailyActivities.css";

function UserDailyActivities() {
  const [ActivityList, setActivityList] = useState([]);
  const fetchStudents = async () => {
    const response = await fetch(
      `http://localhost:3001/useractivities/${localStorage.getItem("email")}`
    );
    const data = await response.json();
    setActivityList(data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("email") == null) {
      navigate("/userlogin");
    }
  }, []);

  return (
    <div className="UserDailyActivities">
      <div className="Rectangle6" />
      <div className="BabyOwls">BabyOwls.</div>
      <Link to="/user/teacher">
        <div className="Teachers">Teachers</div>
      </Link>
      <Link to="/user/caregiver">
        <div className="CareTakers">Caregivers</div>
      </Link>
      <Link to="/user/doctor">
        <div className="Doctors">Doctors</div>
      </Link>
      <div className="DailyActivities">Daily Activities</div>
      <Link to="/user/profile">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />
      <div className="heading"> Daily Activities</div>
      {ActivityList.map((val, key) => {
        return (
          <div className="individual">
            <span className="ActivityName">{val.activity_name} </span>
            <span className="ActivitydescriptionActivitydescriptionActivitydescriptionActivitydescription">
              {" "}
              {val.activity_description}
            </span>
            <span className="Durationxhrs">
              Duration: {val.duration_hours} hrs{" "}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default UserDailyActivities;
