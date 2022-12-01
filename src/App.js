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

        <Route path="/admin/children" element={<AdminUser />} />
        <Route
          path="/admin/create/dailyactivities"
          element={<AdminCreateDailyActivities />}
        />
        <Route path="/user/activities" element={<UserDailyActivities />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
