import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AreasEmpresa from "../Pages/AreasEmpresa/AreasEmpresa";
import Responsaveis from "../Pages/Responsaveis/Responsaveis";
import Forcas from "../Pages/Forcas/Forcas";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/areas-empresa" element={<AreasEmpresa />} />
        <Route path="/responsaveis" element={<Responsaveis />} />
        <Route path="/forcas" element={<Forcas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;