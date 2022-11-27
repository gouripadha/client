import React from "react";
import "./AdminDailyActivities.css";
import Axios from "axios";
import { useState, useEffect } from "react";

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
    <div className="AdminDailyActivities_AdminDailyActivities">
      <div className="Rectangle6" />
      <span className="BabyOwls">BabyOwls.</span>
      <span className="Teachers">Teachers</span>
      <span className="CareTakers">Caregivers</span>
      <span className="Doctors">Doctors</span>
      <span className="DailyActivities">Daily Activities</span>
      <span className="DailyActivities_1">Daily Activities</span>
      <span className="Children">Children</span>
      <div className="spacer" />

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

      <button className="Addbutton">Add Activity</button>
    </div>
  );
}

export default AdminDailyActivities;
