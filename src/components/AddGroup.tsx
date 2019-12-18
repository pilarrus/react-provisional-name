import React from "react";
import Title from "./Reusable/Title";
import adventures from "../fake-data/adventures";
import Select2 from "./Reusable/Select";
import { Input } from 'antd';

const AddGroup = () => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__container">
          <Title title="Añadir Grupo" />
          <form action="">
            <Input placeholder="Nombre del grupo" />
            <br/>
            <Select2 placeholder="Tipo de Actividad" options={adventures}/>
            <br/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
