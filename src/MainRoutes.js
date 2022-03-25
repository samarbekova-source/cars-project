import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddCars from "./components/AddCars/AddCars";
import EditCars from "./components/EditCars/EditCars";
import Home from "./components/Home/Home";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddCars />} />
        <Route exact path="/edit" element={<EditCars />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
