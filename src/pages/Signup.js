import React from "react";
import "./Signup.css";
import sgn from "../images/Signup_image3.png";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [ChildName, setChildName] = useState("");
  const [ParentName, setParentName] = useState("");
  const [MedicalHistory, setMedicalHistory] = useState("");
  const [Year, setYear] = useState(0);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Contact, setContact] = useState(0);
  const navigate = useNavigate();

  const addUser = () => {
    Axios.post(
      "http://localhost:3001/createuser",
      {
        ChildName: ChildName,
        ParentName: ParentName,
        MedicalHistory: MedicalHistory,
        Year: Year,
        Email: Email,
        Password: Password,
        Contact: Contact,
      },
      { timeout: 10000 }
    )
      .then(() => {
        navigate("/userlogin");
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
        if (err.response) alert(err.response.data.message);
      });
  };
  return (
    <div className="Signup">
      <div className="Group2137">
        <span className="Signup_1">Sign up</span>
        <span className="AlreadyAMemberLogIn">Already A Member? Log In</span>
        <button onClick={addUser} className="CreateAccount">
          Create Account
        </button>

        <form className="info">
          <input
            className="Parent"
            type="text"
            placeholder="  Parent Name"
            onChange={(event) => {
              setParentName(event.target.value);
            }}
            required
          />
          <input
            className="Email"
            type="email"
            placeholder="  Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <input
            className="Child"
            type="text"
            placeholder="  Child Name"
            onChange={(event) => {
              setChildName(event.target.value);
            }}
            required
          />
          <input
            className="Age"
            type="number"
            placeholder="  Year"
            onChange={(event) => {
              setYear(event.target.value);
            }}
            required
          />
          <input
            className="Med"
            type="text"
            placeholder="  Medical History"
            onChange={(event) => {
              setMedicalHistory(event.target.value);
            }}
          />
          <input
            className="Contact"
            type="number"
            placeholder="  Contact No."
            onChange={(event) => {
              setContact(event.target.value);
            }}
            required
          />
          <input
            className="pass"
            type="password"
            placeholder="  Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </form>

        <span className="AlreadyAMemberLogIn">Already A Member? Log In</span>
      </div>
      <img className="image3" src={sgn} />
    </div>
  );
}

export default Signup;
