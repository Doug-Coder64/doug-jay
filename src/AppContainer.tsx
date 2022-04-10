import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const AppContainer = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes></Routes>
      </Router>
    </>
  );
};

export default AppContainer;
