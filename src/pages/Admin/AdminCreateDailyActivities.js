import React from "react";
import "./AdminCreateDailyActivities.css";
import { useState } from "react";
import Axios from "axios";

export default function AdminCreateDailyActivities() {
  const [ActivityName, setActivityName] = useState("");
  const [ActivityDescription, setActivityDescription] = useState("");
  const [Duration, setDuration] = useState(0);

  const addActivity = () => {
    Axios.post("http://localhost:3001/createactivity", {
      ActivityName: ActivityName,
      ActivityDescription: ActivityDescription,
      Duration: Duration,
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
      <span className="CreateANewDailyActivity">
        Create A New Daily Activity
      </span>
      <span className="Children">Children</span>

      <div className="info">
        <label>Activity Name</label>
        <input
          type="text"
          onChange={(event) => {
            setActivityName(event.target.value);
          }}
        />
        <label>Activity Description</label>
        <input
          type="text"
          onChange={(event) => {
            setActivityDescription(event.target.value);
          }}
        />
        <label>Duartion(in hours)</label>
        <input
          type="number"
          onChange={(event) => {
            setDuration(event.target.value);
          }}
        />

        <button onClick={addActivity}>Add Activity</button>
      </div>
    </div>
  );
}
