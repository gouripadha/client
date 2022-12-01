import React from "react";
import "./AdminCaregiver.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <>
      <div className="AdminCaregiver">
        <div className="Rectangle6" />
        <Link to="/admin/caregiver">
          <span className="CareTakers">Caregivers</span>
        </Link>
        <Link to="/admin">
          <span className="BabyOwls">BabyOwls.</span>
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

        <span className="DailyActivities_1">Caregivers</span>

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
        <Link to="/admin/create/caregiver">
          <button className="Addbutton">Add Caregiver</button>
        </Link>
      </div>
    </>
  );
}

export default AdminCaregiver;
