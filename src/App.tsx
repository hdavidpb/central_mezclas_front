import CalidadNoOncologicos from "@components/control_calidad/Esteriles_No_oncologicos/CalidadNoOncologicos";
import CalidadNutricionesParentales from "@components/control_calidad/NutricionesParentales/CalidadNutricionesParentales";
import CalidadOncologicoAmbulatorio from "@components/control_calidad/OncologicoAmbulatorio/CalidadOncologicoAmbulatorio";
import CalidadOncologicoHospitalario from "@components/control_calidad/Oncologico_Hospitalario/CalidadOncologicoHospitalario";
import NoOncologicos from "@components/ordenes_produccion/NoOncologicos/NoOncologicos";
import NutricionesParentales from "@components/ordenes_produccion/Nutriciones_Parentales/NutricionesParentales";
import OncologicoAmbulatorio from "@components/ordenes_produccion/Oncologico_Ambulatorio/OncologicoAmbulatorio";
import OncologicoHospitalario from "@components/ordenes_produccion/Oncologico_Hospitalario/OncologicoHospitalario";
import Sidebar from "@components/Sidebar/Sidebar";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import * as sc from "./globalStyles";
const App = () => {
  return (
    <HashRouter>
      <sc.CentralContainer>
        <Sidebar />
        <Routes>
          <Route
            path="/central-mezclas/ordenes-produccion/esteriles-no-oncologicos"
            element={<NoOncologicos />}
          />
          <Route
            path="/central-mezclas/ordenes-produccion/oncologico-hospitalario"
            element={<OncologicoHospitalario />}
          />
          <Route
            path="/central-mezclas/ordenes-produccion/oncologico-ambulatorio"
            element={<OncologicoAmbulatorio />}
          />
          <Route
            path="/central-mezclas/ordenes-produccion/nutriciones-parentales"
            element={<NutricionesParentales />}
          />
          <Route
            path="/central-mezclas/control-calidad/esteriles-no-oncologicos"
            element={<CalidadNoOncologicos />}
          />
          <Route
            path="/central-mezclas/control-calidad/oncologico-hospitalario"
            element={<CalidadOncologicoHospitalario />}
          />
          <Route
            path="/central-mezclas/control-calidad/oncologico-ambulatorio"
            element={<CalidadOncologicoAmbulatorio />}
          />
          <Route
            path="/central-mezclas/control-calidad/nutriciones-parentales"
            element={<CalidadNutricionesParentales />}
          />
        </Routes>
      </sc.CentralContainer>
    </HashRouter>
  );
};

export default App;
