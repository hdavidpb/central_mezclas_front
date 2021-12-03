import React, { useState } from "react";
import * as sc from "./styles";

import { BiExit } from "react-icons/bi";

import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { SmallIconCaontainer } from "../../globalStyles";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const [colorOption, setColorOption] = useState<number>(-1);

  const handleColorOption = (index: number) => {
    setColorOption(index);
  };

  return (
    <sc.SideBarContainer>
      <sc.ListModules>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/central-mezclas/ordenes-produccion/esteriles-no-oncologicos"
          end
        >
          <sc.TitleModule>Órdenes de producción</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/central-mezclas/control-calidad/esteriles-no-oncologicos"
        >
          <sc.TitleModule>Control de Calidad</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/central-mezclas/reempaque-solidos"
        >
          <sc.TitleModule>Reempaque de Sólidos</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/central-mezclas/orden-ambulatoria"
        >
          <sc.TitleModule>Crear orden Ambulatoria</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "central_active_link modules__titem" : "modules__titem"
          }
          to="/central-mezclas/reporte-aprovechamientos"
        >
          <sc.TitleModule>Reporte de Aprovechamiento</sc.TitleModule>
          <SmallIconCaontainer>
            <RiArrowRightSLine />
          </SmallIconCaontainer>
        </NavLink>

        <sc.CoupleModuleBox>
          <sc.ModulesItemNoLink

          // style={{ background: colorOption === 6 ? "white" : "" }}
          // onClick={() => handleColorOption(6)}
          >
            <sc.TitleModule>Configuración</sc.TitleModule>
            <SmallIconCaontainer>
              <RiArrowDownSLine />
            </SmallIconCaontainer>
          </sc.ModulesItemNoLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "central_active_link coupleItemModule"
                : "coupleItemModule"
            }
            to="/central-mezclas/estabilidad-medicamentos"
            style={{ background: colorOption === 7 ? "white" : "" }}
            onClick={() => handleColorOption(7)}
          >
            <p>Estabilidad Medicamentos</p>
            <SmallIconCaontainer heightWidth={"13px"}>
              <RiArrowRightSLine />
            </SmallIconCaontainer>
          </NavLink>
        </sc.CoupleModuleBox>
      </sc.ListModules>
      <sc.Footer>
        <sc.ExitHeader to="/hygea">
          <p>Salir</p>
          <sc.CloseIconContainer>
            <BiExit />
          </sc.CloseIconContainer>
        </sc.ExitHeader>
        <sc.WaterMarc>Developed by LYA ELECTRONIC v:0.0.1</sc.WaterMarc>
      </sc.Footer>
    </sc.SideBarContainer>
  );
};

export default Sidebar;
