import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin/Dashboard";
import UserHome from "./user/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/user" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
