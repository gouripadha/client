import React from "react";
import "./UserDoctorBook.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserDoctorBook() {
  const [DoctorList, setDoctorList] = useState([]);
  const navigator = useNavigate();

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/doctors");
    const data = await response.json();
    setDoctorList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const updateDoctor = (doctor_id) => {
    Axios.put("http://localhost:3001/bookdoctor", {
      doctor_id: doctor_id,
      email: localStorage.getItem("email"),
    });
  };

  return (
    <div className="UserDoctors">
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
      <Link to="/user/profile">
        <span className="Children">Profile</span>
      </Link>
      <div className="spacer" />

      <span className="DailyActivities_1">Doctors</span>

      {DoctorList.map((val, key) => {
        return (
          <div className="individual">
            <span className="ActivityName">{val.doctor_name} </span>
            <span className="ActivitydescriptionActivitydescriptionActivitydescriptionActivitydescription">
              {val.doctor_qualifications}
              <button
                className="Deletebutton"
                onClick={() => {
                  updateDoctor(val.doctor_id);
                  navigator("/user/doctor");
                }}
              >
                Book Doctor
              </button>{" "}
            </span>

            <span className="Durationxhrs">
              Specialization: {val.specialization}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default UserDoctorBook;
