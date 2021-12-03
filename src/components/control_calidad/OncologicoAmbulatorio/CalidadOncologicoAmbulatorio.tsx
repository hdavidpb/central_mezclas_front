import NavbarBanner from "@components/NavbarBanner";
import React from "react";
import FilterControlCalidad from "../FilterControlCalidad";
import * as sc from "../style";
import Table from "../Table";
const CalidadOncologicoAmbulatorio = () => {
  return (
    <sc.ControlContainerContainer>
      <NavbarBanner view={1} />
      <FilterControlCalidad />
      <Table />
    </sc.ControlContainerContainer>
  );
};

export default CalidadOncologicoAmbulatorio;
