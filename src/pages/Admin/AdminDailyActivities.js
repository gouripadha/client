import React from "react";
import "./AdminDailyActivities.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminDailyActivities() {
  const [ActivityList, setActivityList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/activities");
    const data = await response.json();
    setActivityList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteActivity = (activity_id) => {
    Axios.delete(`http://localhost:3001/deleteactivity/${activity_id}`).then(
      (response) => {
        setActivityList(
          ActivityList.filter((val) => {
            return val.activity_id != activity_id;
          })
        );
      }
    );
  };

  return (
    <div className="AdminDailyActivities">
      <div className="Rectangle6" />
      <div className="BabyOwls">BabyOwls.</div>
      <Link to="/admin/teacher">
        <div className="Teachers">Teachers</div>
      </Link>
      <Link to="/admin/caregiver">
        <div className="CareTakers">Caregivers</div>
      </Link>
      <Link to="/admin/doctor">
        <div className="Doctors">Doctors</div>
      </Link>
      <div className="DailyActivities">Daily Activities</div>

      <Link to="/admin/children">
        <span className="Children">Children</span>
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
              <button
                className="Deletebutton"
                onClick={() => {
                  deleteActivity(val.activity_id);
                }}
              >
                Delete Activity
              </button>
            </span>
            <span className="ActivityIdXXX">
              Activity Id: A{val.activity_id}
            </span>
          </div>
        );
      })}

      <Link to="/admin/create/dailyactivities">
        <button className="Addbutton">Add Activity</button>
      </Link>
    </div>
  );
}

export default AdminDailyActivities;
