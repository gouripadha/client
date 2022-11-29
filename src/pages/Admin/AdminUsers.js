import React from "react";
import "./AdminUsers.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AdminUser() {
  const [UserList, setUserList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/children");
    const data = await response.json();
    setUserList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteUser = (child_id) => {
    Axios.delete(`http://localhost:3001/deletechild/${child_id}`).then(
      (response) => {
        setUserList(
          UserList.filter((val) => {
            return val.child_id !== child_id;
          })
        );
      }
    );
  };

  return (
    <div className="AdminUser">
      <div className="Rectangle6" />
      <span className="BabyOwls">BabyOwls.</span>
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
      <span className="DailyActivities_1">Children</span>
      <Link to="/admin/children">
        <span className="Children">Children</span>
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
            <span className="ActivityIdXXX">Age: {val.age} </span>
            <span className="ActivityIdXXX">User Id: U{val.child_id}</span>

            <span className="ActivityIdXXX">Caregiver Id: C{val.cid}</span>
            <span className="ActivityIdXXX">Doctor Id: D{val.cid}</span>
            <span className="ActivityIdXXX">Email: {val.email} </span>
            <span className="ActivityIdXXX">Contact: {val.contact} </span>

            <button
              className="Deletebutton"
              onClick={() => {
                deleteUser(val.child_id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default AdminUser;
