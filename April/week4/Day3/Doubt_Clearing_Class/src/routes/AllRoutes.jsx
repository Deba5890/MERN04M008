import React from 'react'
import { Route, Routes } from 'react-router'
import Login from "../components/Login";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;