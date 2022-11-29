import React from "react";
import "./UserLogin.css";
import sgn from "../images/UserLogin_image4.png";
import { useState } from "react";
import Axios from "axios";
import { Navigate, History } from "react-router-dom";
function UserLogin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // create onclick function
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: Email,
      password: Password,
    }).then((response) => {
      console.log(response.data.value);
      if (response.data.value == 1) {
        alert("Login successful");
      } else alert("Wrong email/password combination!");
    });
  };

  return (
    <div className="UserLogin">
      <div className="Group2137">
        <span className="UserLogin_1">Login</span>
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

        <span className="AlreadyAMemberLogIn">Not Registered? Sign up</span>
      </div>
      <img className="image3" src={sgn} />
    </div>
  );
}

export default UserLogin;
