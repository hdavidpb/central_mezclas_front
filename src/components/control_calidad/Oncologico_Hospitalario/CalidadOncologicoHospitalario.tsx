import NavbarBanner from "@components/NavbarBanner";
import React from "react";
import FilterControlCalidad from "../FilterControlCalidad";
import Table from "../Table";
import * as sc from "../style";
const CalidadOncologicoHospitalario = () => {
  return (
    <sc.ControlContainerContainer>
      <NavbarBanner view={1} />
      <FilterControlCalidad />
      <Table />
    </sc.ControlContainerContainer>
  );
};

export default CalidadOncologicoHospitalario;
