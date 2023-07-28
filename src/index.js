import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EquipTable from "./EquipTable";
import './index.css';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/Hiteku" element={<EquipTable page="Hiteku" />} />
      <Route path="/LeiLei" element={<EquipTable page="LeiLei" />} />
    </Routes>
  );
};

ReactDOM.render(
  <Router>
    <MainRoutes />
  </Router>,
  document.getElementById("root")
);

