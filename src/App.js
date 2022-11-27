import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Admin";
import AdminCreateDailyActivities from "./pages/Admin/AdminCreateDailyActivities";
import AdminDailyActivities from "./pages/Admin/AdminDailyActivities";
import AdminCreateTeacher from "./pages/Admin/AdminCreateTeacher";
import AdminTeacher from "./pages/Admin/AdminTeacher";
import AdminCreateDoctor from "./pages/Admin/AdminCreateDoctor";
import AdminCreateCaregiver from "./pages/Admin/AdminCreateCaregiver";
import AdminCaregiver from "./pages/Admin/AdminCaregiver";
import AdminDoctor from "./pages/Admin/AdminDoctor";

function App() {
  return (
    <div className="App">
      <AdminDoctor />
    </div>
  );
}

export default App;
