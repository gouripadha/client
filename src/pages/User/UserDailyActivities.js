import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function UserDailyActivities() {
  const [ActivityList, setActivityList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/activities");
    const data = await response.json();
    setActivityList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

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

export default UserDailyActivities;
