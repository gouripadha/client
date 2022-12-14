import React, { useState, useMemo } from "react";
import Home from "./pages/Home";
// create browser router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import AdminCaregiver from "./pages/Admin/AdminCaregiver";
import AdminCreateCaregiver from "./pages/Admin/AdminCreateCaregiver";
import AdminCreateDailyActivites from "./pages/Admin/AdminCreateDailyActivities";
import AdminCreateDoctor from "./pages/Admin/AdminCreateDoctor";
import AdminCreateTeacher from "./pages/Admin/AdminCreateTeacher";
import AdminCreateDailyActivities from "./pages/Admin/AdminCreateDailyActivities";
import AdminDoctor from "./pages/Admin/AdminDoctor";
import AdminTeacher from "./pages/Admin/AdminTeacher";
import AdminDailyActivites from "./pages/Admin/AdminDailyActivities";
import AdminUser from "./pages/Admin/AdminUsers";
import UserLogin from "./pages/UserLogin";
import User from "./pages/User/User";
import Signup from "./pages/Signup";
import UserDailyActivities from "./pages/User/UserDailyActivities";
import UserTeacher from "./pages/User/UserTeacher";
import UserProfile from "./pages/User/UserProfile";
import UserUpdate from "./pages/User/UserUpdate";
import UserDoctor from "./pages/User/UserDoctor";
import UserCaregiver from "./pages/User/UserCaregiver";
import UserBook from "./pages/User/UserBook";
import AdminLogin from "./pages/AdminLogin";
import UserDoctorBook from "./pages/User/UserDoctorBook";

function App() {
  // this is made for the user context

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={<Admin />} />
        <Route path="/admin/caregiver" element={<AdminCaregiver />} />
        <Route
          path="/admin/create/caregiver"
          element={<AdminCreateCaregiver />}
        />
        <Route
          path="/admin/dailyactivities"
          element={<AdminDailyActivites />}
        />
        <Route path="/admin/create/doctor" element={<AdminCreateDoctor />} />
        <Route path="/admin/create/teacher" element={<AdminCreateTeacher />} />
        <Route path="/admin/doctor" element={<AdminDoctor />} />
        <Route path="/admin/teacher" element={<AdminTeacher />} />
        <Route path="/user/teacher" element={<UserTeacher />} />
        <Route path="/user/doctor" element={<UserDoctor />} />

        <Route path="/admin/children" element={<AdminUser />} />
        <Route
          path="/admin/create/dailyactivities"
          element={<AdminCreateDailyActivities />}
        />
        <Route path="/user/activities" element={<UserDailyActivities />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/update" element={<UserUpdate />} />
        <Route path="/user/caregiver" element={<UserCaregiver />} />
        <Route path="/user/book" element={<UserBook />} />
        <Route path="/user/bookdoctor" element={<UserDoctorBook />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
