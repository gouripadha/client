import React from "react";
import "./AdminLogin.css";
// import { UserContext } from "./../UserContext";
import sgn from "../images/UserLogin_image4.png";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function AdminLogin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  // create onclick function
  const login = () => {
    Axios.post("http://localhost:3001/adminlogin", {
      email: Email,
      password: Password,
    }).then((response) => {
      console.log(response.data.value);
      if (response.data.value == 1) {
        alert("Login successful");
        localStorage.setItem("admin", true);
        // console.log(localStorage.getItem("email"));
        navigate("/admin");
      } else alert("Wrong email/password combination!");
    });
  };

  return (
    <div className="AdminLogin">
      <div className="Group2137">
        <span className="UserLogin_1">Admin Login</span>
        <button className="CreateAccount" onClick={login}>
          Login
        </button>

        <form className="info">
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
            className="pass"
            type="password"
            placeholder="  Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </form>
      </div>
      <img className="image3" src={sgn} />
    </div>
  );
}

export default AdminLogin;
