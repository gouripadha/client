import React from "react";
import "./AdminCaregiver.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function AdminCaregiver() {
  const [CaregiverList, setCaregiverList] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/caregivers");
    const data = await response.json();
    setCaregiverList(data);
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteCaregiver = (caregiver_id) => {
    Axios.delete(`http://localhost:3001/deletecaregiver/${caregiver_id}`).then(
      (response) => {
        setCaregiverList(
          CaregiverList.filter((val) => {
            return val.caregiver_id !== caregiver_id;
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
      <span className="DailyActivities_1">Caregivers</span>
      <span className="Children">Children</span>
      <div className="spacer" />

      {CaregiverList.map((val, key) => {
        return (
          //caregiver_id, caregiver_name, shift_start, shift_end, Room
          <div className="individual">
            <span className="ActivityName">{val.caregiver_name} </span>
            <span className="ActivityIdXXX">
              Shift Start: {val.shift_start}
            </span>
            <span className="ActivityIdXXX">Shift End: {val.shift_end}</span>

            <span className="Durationxhrs">
              Room: {val.Room}{" "}
              <button
                className="Deletebutton"
                onClick={() => {
                  deleteCaregiver(val.caregiver_id);
                }}
              >
                Delete Caregiver
              </button>
            </span>
            <span className="ActivityIdXXX">
              Caregiver Id: C{val.caregiver_id}
            </span>
          </div>
        );
      })}

      <button className="Addbutton">Add Caregiver</button>
    </div>
  );
}

export default AdminCaregiver;
