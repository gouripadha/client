import React from "react";
import img1 from "../images/Homepage_image1.png";
import line2 from "../images/Homepage_Line2.png";
import care from "../images/care.jpg";
import "./home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Homepage_Homepage">
      <div className="Rectangle1" />
      <span className="BabyOwls">BabyOwls.</span>
      <span className="InnovativeDaycareForWorkingParents">
        Innovative Daycare
        <br />
        For Working Parents
      </span>
      <span className="WhyChooseUs">Why Choose Us</span>
      <span className="WithintheBabyOwlsfamilywecreateanenvironmentofhonestyandtrustbycommunicatingopenlyandauthenticallywithoneanotherandrespectingtheopinionsofthosewithwhomweworkWelistentotheneedsandconcernsofthoseweserveandrespondwithasenseofurgency">
        Within the BabyOwls family, we create an environment of honesty and
        trust by communicating openly and authentically with one another and
        respecting the opinions of those with whom we work. We listen to the
        needs and concerns of those we serve and respond with a sense of
        urgency.
        <br />
      </span>
      <div className="Navigation">
        <link></link>
        <Link to="/">
          <span className="Home">Home</span>
        </Link>
        <Link to="/userlogin">
          <span className="Login">Login</span>
        </Link>
        <Link to="/signup">
          <span className="Signup">Sign up</span>
        </Link>
        <Link to="/">
          <span className="Gallery">Gallery</span>
        </Link>
        <Link to="/">
          <span className="AdminLogin">Admin Login</span>
        </Link>
      </div>
      <div className="Dot">
        <div className="Dotted">
          <div className="Group12">
            <div className="Ellipse1" />
            <div className="Ellipse3" />
            <div className="Ellipse4" />
            <div className="Ellipse5" />
            <div className="Ellipse6" />
            <div className="Ellipse7" />
            <div className="Ellipse8" />
            <div className="Ellipse9" />
          </div>
          <div className="Group18">
            <div className="Ellipse10" />
            <div className="Ellipse11" />
            <div className="Ellipse12" />
            <div className="Ellipse13" />
            <div className="Ellipse14" />
            <div className="Ellipse15" />
            <div className="Ellipse16" />
            <div className="Ellipse17" />
          </div>
          <div className="Group17">
            <div className="Ellipse18" />
            <div className="Ellipse19" />
            <div className="Ellipse20" />
            <div className="Ellipse21" />
            <div className="Ellipse22" />
            <div className="Ellipse23" />
            <div className="Ellipse24" />
            <div className="Ellipse25" />
          </div>
          <div className="Group16">
            <div className="Ellipse26" />
            <div className="Ellipse27" />
            <div className="Ellipse28" />
            <div className="Ellipse29" />
            <div className="Ellipse30" />
            <div className="Ellipse31" />
            <div className="Ellipse32" />
            <div className="Ellipse33" />
          </div>
          <div className="Group15">
            <div className="Ellipse34" />
            <div className="Ellipse35" />
            <div className="Ellipse36" />
            <div className="Ellipse37" />
            <div className="Ellipse38" />
            <div className="Ellipse39" />
            <div className="Ellipse40" />
            <div className="Ellipse41" />
          </div>
          <div className="Group14">
            <div className="Ellipse42" />
            <div className="Ellipse43" />
            <div className="Ellipse44" />
            <div className="Ellipse45" />
            <div className="Ellipse46" />
            <div className="Ellipse47" />
            <div className="Ellipse48" />
            <div className="Ellipse49" />
          </div>
          <div className="Group13">
            <div className="Ellipse50" />
            <div className="Ellipse51" />
            <div className="Ellipse52" />
            <div className="Ellipse53" />
            <div className="Ellipse54" />
            <div className="Ellipse55" />
            <div className="Ellipse56" />
            <div className="Ellipse57" />
            <div className="Ellipse58" />
            <div className="Ellipse59" />
            <div className="Ellipse60" />
            <div className="Ellipse61" />
            <div className="Ellipse62" />
            <div className="Ellipse63" />
            <div className="Ellipse64" />
            <div className="Ellipse65" />
          </div>
        </div>
      </div>
      <img className="Line2" src={line2} />
      <img className="image1" src={img1} />
      <img className="icar" src={care} />
    </div>
  );
}

export default Home;
