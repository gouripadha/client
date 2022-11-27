import React from "react";
import "./Signup.css";
import sgn from "../../images/Signup_image3.png";

function Signup() {
  return (
    <div className="Signup_Signup">
      <div className="Group2137">
        <span className="Signup_1">Sign up</span>
        <span className="AlreadyAMemberLogIn">Already A Member? Log In</span>

        <button className="CreateAccount">Create Account</button>

        <div className="Rectangle1046" />
        <div className="Rectangle1049" />
        <span className="Email">Email</span>
        <span className="test1gmailcom">test1@gmail.com</span>
        <div className="Rectangle1050" />
        <span className="ContactNo">Contact No.</span>
        <span className="_896XXXXXXX">896XXXXXXX</span>
        <span className="ChildName">Child Name</span>
        <span className="Aarav">Aarav</span>
        <div className="Group2023">
          <div className="Rectangle1047" />
          <span className="_">**************</span>
        </div>
        <div className="Rectangle1041" />
        <div className="Rectangle1042" />
        <span className="FirstName">First Name</span>
        <span className="Prabhatsinh">Prabhatsinh</span>
        <span className="LastName">Last Name</span>
        <span className="Rathod">Rathod</span>
        <div className="Rectangle1049_1" />
        <span className="MedicalHistory">Medical History</span>
        <span className="None">None</span>
        <div className="Rectangle1050_1" />
        <span className="ChildAge">Child Age</span>
        <span className="_8">8</span>
      </div>
      <img className="image3" src={sgn} />
    </div>
  );
}

export default Signup;
