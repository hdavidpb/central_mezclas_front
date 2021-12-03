import NavbarBanner from "@components/NavbarBanner";
import React from "react";
import OrdersTable from "../OrdersTable";
import * as sc from "../styles";
const OncologicoHospitalario = () => {
  return (
    <sc.OrdersContainerContainer>
      <NavbarBanner view={0} />
      <sc.TablesContainer>
        <OrdersTable />
        <OrdersTable />
        <OrdersTable />
      </sc.TablesContainer>
      <sc.GenerateOrderContainer>
        <button>Generar Orden</button>
      </sc.GenerateOrderContainer>
    </sc.OrdersContainerContainer>
  );
};

export default OncologicoHospitalario;
