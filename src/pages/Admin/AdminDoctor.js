import React from "react";
import "./AdminDoctor.css";
import Axios from "axios";
import { useState, useEffect } from "react";

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
      <div className="Rectangle6" />
      <span className="BabyOwls">BabyOwls.</span>
      <span className="Teachers">Teachers</span>
      <span className="CareTakers">Caregivers</span>
      <span className="Doctors">Doctors</span>
      <span className="DailyActivities">Daily Activities</span>
      <span className="Children">Children</span>
      <div className="spacer" />

      <span className="DailyActivities_1">Doctors</span>

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
