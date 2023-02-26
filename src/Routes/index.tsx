import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AreasEmpresa from "../Pages/AreasEmpresa/AreasEmpresa";
import Responsaveis from "../Pages/Responsaveis/Responsaveis";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/areas-empresa" element={<AreasEmpresa />} />
        <Route path="/responsaveis" element={<Responsaveis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;