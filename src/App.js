import React from "react";
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
import Signup from "./pages/User/Signup";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/admin/" element={<Admin />} />
    //     <Route path="/admin/caregiver" element={<AdminCaregiver />} />

    //     <Route
    //       path="/admin/create/caregiver"
    //       element={<AdminCreateCaregiver />}
    //     />
    //     <Route
    //       path="/admin/create/dailyactivites"
    //       element={<AdminCreateDailyActivites />}
    //     />
    //     <Route path="/admin/create/doctor" element={<AdminCreateDoctor />} />
    //     <Route path="/admin/create/teacher" element={<AdminCreateTeacher />} />
    //     <Route path="/admin/doctor" element={<AdminDoctor />} />
    //     <Route path="/admin/teacher" element={<AdminTeacher />} />
    //     <Route
    //       path="/admin/dailyactivities"
    //       element={<AdminCreateDailyActivities />}
    //     />
    //   </Routes>
    // </BrowserRouter>

    <div className="App">
      <Signup />
    </div>

    // <div className="App">
    //   <Home />
    // </div>
  );
}

export default App;
