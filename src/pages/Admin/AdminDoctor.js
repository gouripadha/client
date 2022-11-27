import React from "react";
import "./AdminDoctor.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AdminDoctor() {
  const [DoctorList, setDoctorList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/doctors");
    const data = await response.json();
    setDoctorList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteDoctor = (doctor_id) => {
    Axios.delete(`http://localhost:3001/deletedoctor/${doctor_id}`).then(
      (response) => {
        setDoctorList(
          DoctorList.filter((val) => {
            return val.doctor_id !== doctor_id;
          })
        );
      }
    );
  };

  return (
    <div className="AdminDailyActivities_AdminDailyActivities">
      <span className="BabyOwls">BabyOwls.</span>
      <Link to="/admin/caregiver">
        <span className="CareTakers">Caregivers</span>
      </Link>
      <Link to="/admin/teacher">
        <span className="Teachers">Teachers</span>
      </Link>
      <Link to="/admin/doctor">
        <span className="Doctors">Doctors</span>
      </Link>
      <Link to="/admin/dailyactivities">
        <span className="DailyActivities">Daily Activities</span>
      </Link>
      <Link to="/admin/children">
        <span className="Children">Children</span>
      </Link>
      <div className="spacer" />

      {DoctorList.map((val, key) => {
        return (
          <div className="individual">
            <span className="ActivityName">{val.doctor_name} </span>
            <span className="ActivitydescriptionActivitydescriptionActivitydescriptionActivitydescription">
              {val.doctor_qualifications}
            </span>

            <span className="Durationxhrs">
              Specialization: {val.specialization}
              <button
                className="Deletebutton"
                onClick={() => {
                  deleteDoctor(val.doctor_id);
                }}
              >
                Delete Doctor
              </button>
            </span>
            <span className="ActivityIdXXX">Doctor Id: D{val.doctor_id}</span>
          </div>
        );
      })}

      <button className="Addbutton">Add Doctor</button>
    </div>
  );
}

export default AdminDoctor;
