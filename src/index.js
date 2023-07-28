import React from "react";
import { createRoot } from "react-dom/client"; // 使用 "react-dom/client" 來引入 createRoot
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EquipTable from "./EquipTable";
import './index.css';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/msEquip/Hiteku" element={<EquipTable page="Hiteku" />} />
      <Route path="/msEquip/LeiLei" element={<EquipTable page="LeiLei" />} />
    </Routes>
  );
};

createRoot(document.getElementById("root")).render(
  <Router>
    <MainRoutes />
  </Router>
);
