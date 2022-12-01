import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

import "./UserUpdate.css";

function UserUpdate() {
  const [User, setUser] = useState([]);
  const [newChildName, setnewChildName] = useState("");
  const [newParentName, setnewParentName] = useState("");
  const [newMedicalHistory, setnewMedicalHistory] = useState("");
  const [newYear, setnewYear] = useState(0);
  const [newContact, setnewContact] = useState(0);

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
    console.log(data[0]);
    setUser(data[0]);
    setnewChildName(data[0].child_name);
    setnewParentName(data[0].parent_name);
    setnewMedicalHistory(data[0].medical_history);
    setnewYear(data[0].year);
    setnewContact(data[0].contact);
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  useEffect(() => {
    console.log(User);
  }, []);
  const updateUser = (email) => {
    console.log(newChildName);
    console.log(newParentName);
    console.log(newMedicalHistory);
    console.log(newYear);
    console.log(newContact);

    Axios.put("http://localhost:3001/updateuser", {
      child_name: newChildName,
      parent_name: newParentName,
      medical_history: newMedicalHistory,
      year: newYear,
      contact: newContact,
      email: email,
    }).then((response) => {
      console.log(response);
      navigate("/user/profile");
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
      <Link to="/user/profile">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />
      <div className="individual">
        <span className="ActivityIdXXX">
          Child Name:{" "}
          <input
            type="text"
            defaultValue={User.child_name}
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
            defaultValue={User.parent_name}
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
            defaultValue={User.medical_history}
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
            defaultValue={User.year}
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
            defaultValue={User.contact}
            onChange={(event) => {
              setnewContact(event.target.value);
            }}
            required
          />
        </span>
        <button
          className="Addbutton"
          onClick={() => {
            updateUser(User.email);
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UserUpdate;
