import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "./UserUpdate.css";

function UserUpdate() {
  const [UserList, setUserList] = useState([]);
  const [newChildName, setnewChildName] = useState("");
  const [newParentName, setnewParentName] = useState("");
  const [newMedicalHistory, setnewMedicalHistory] = useState("");
  const [newYear, setnewYear] = useState(0);

  const [newContact, setnewContact] = useState(0);

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

  const updateUser = (email) => {
    Axios.put("http://localhost:3001/updateuser", {
      child_name: newChildName,
      parent_name: newParentName,
      medical_history: newMedicalHistory,
      year: newYear,
      contact: newContact,
      email: email,
    }).then((response) => {
      console.log(response);
      setUserList(
        UserList.map((val) => {
          return val.email == email
            ? {
                child_name: newChildName,
                parent_name: newParentName,
                medical_history: newMedicalHistory,
                year: newYear,

                contact: newContact,
                email: email,
              }
            : val;
        })
      );
    });
  };

  return (
    <div className="UserUpdate">
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
      <Link to="/user/children">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />

      {UserList.map((val, key) => {
        return (
          <div className="individual">
            <span className="ActivityIdXXX">
              Child Name:{" "}
              <input
                type="text"
                defaultValue={val.child_name}
                onChange={(event) => {
                  setnewChildName(event.target.value);
                }}
                required
              />
            </span>
            <span className="ActivityIdXXX">
              Parent Name:{" "}
              <input
                className="Parent"
                type="text"
                defaultValue={val.parent_name}
                onChange={(event) => {
                  setnewParentName(event.target.value);
                }}
                required
              />
            </span>
            <span className="ActivityIdXXX">
              Medical History:{" "}
              <input
                type="text"
                defaultValue={val.medical_history}
                onChange={(event) => {
                  setnewMedicalHistory(event.target.value);
                }}
                required
              />
            </span>
            <span className="ActivityIdXXX">
              Year:{" "}
              <input
                type="number"
                defaultValue={val.year}
                onChange={(event) => {
                  setnewYear(event.target.value);
                }}
                required
              />
            </span>
            <span className="ActivityIdXXX">
              Contact:{" "}
              <input
                type="number"
                defaultValue={val.contact}
                onChange={(event) => {
                  setnewContact(event.target.value);
                }}
                required
              />
            </span>
            <button
              className="Addbutton"
              onClick={() => {
                updateUser(val.email);
              }}
            >
              Update
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UserUpdate;
