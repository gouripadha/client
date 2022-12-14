import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

function UserProfile() {
  const [UserList, setUserList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("email") == null) {
      navigate("/userlogin");
    }
  }, []);

  const fetchStudents = async () => {
    const response = await fetch(
      `http://localhost:3001/profile/${localStorage.getItem("email")}`
    );
    const data = await response.json();
    setUserList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  // navigate to home page
  const logout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="UserProfile">
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
      <Link to="/user/activities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <span className="DailyActivities_1">Profile</span>
      <Link to="/user/profile">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />

      {UserList.map((val, key) => {
        return (
          <div className="individual">
            <span className="ActivityName">{val.child_name} </span>
            <span className="ActivityIdXXX">
              Parent Name: {val.parent_name}
            </span>
            <span className="ActivityIdXXX">
              Medical History: {val.medical_history}
            </span>
            <span className="ActivityIdXXX">Birth Year: {val.year} </span>

            <span className="ActivityIdXXX">Email: {val.email} </span>
            <span className="ActivityIdXXX">Contact: {val.contact} </span>
          </div>
        );
      })}
      <Link to="/user/update">
        <button className="Addbutton">Update Profile</button>
      </Link>
      <button className="Deletebutton" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}

export default UserProfile;
