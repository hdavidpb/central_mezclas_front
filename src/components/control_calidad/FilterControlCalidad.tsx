import React from "react";
import { BiDownload, BiSearchAlt } from "react-icons/bi";
import Select from "react-select";
import * as sc from "./style";
const FilterControlCalidad = () => {
  return (
    <sc.FilterContainer>
      <sc.FieldContainer>
        <h6>Filtar por paciente</h6>
        <sc.InputContainer>
          <sc.IconContainer>
            <BiSearchAlt />
          </sc.IconContainer>
          <input type="text" placeholder="Buscar" />
        </sc.InputContainer>
      </sc.FieldContainer>
      <sc.FieldContainer>
        <h6>Filtar por estado</h6>
        <sc.InputContainer>
          <Select options={[]} />
        </sc.InputContainer>
      </sc.FieldContainer>
      <sc.DownloadBtnContainer>
        <BiDownload size={30} color="#ffffff" />
        <p>Descargar Etiquetas</p>
      </sc.DownloadBtnContainer>
    </sc.FilterContainer>
  );
};

export default FilterControlCalidad;
