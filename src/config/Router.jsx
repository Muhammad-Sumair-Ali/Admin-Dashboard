import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Team from "../pages/Team";
import About from "../pages/About";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Router = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            
          </>
        ) : (
          <>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
