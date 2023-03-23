import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AreasEmpresa from "../Pages/AreasEmpresa/AreasEmpresa";
import Responsaveis from "../Pages/Responsaveis/Responsaveis";
import Forcas from "../Pages/Forcas/Forcas";
import Fraquezas from "../Pages/Fraquezas/Fraquezas";
import Oportunidades from "../Pages/Oportunidades/Oportunidades";
import Ameacas from "../Pages/Ameacas/Ameacas";
import MatrizSWOT from "../Pages/MatrizSWOT/MatrizSWOT";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/areas-empresa" element={<AreasEmpresa />} />
        <Route path="/responsaveis" element={<Responsaveis />} />
        <Route path="/forcas" element={<Forcas />} />
        <Route path="/fraquezas" element={<Fraquezas />} />
        <Route path="/oportunidades" element={<Oportunidades />} />
        <Route path="/ameacas" element={<Ameacas />} />
        <Route path="/matriz-swot" element={<MatrizSWOT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
