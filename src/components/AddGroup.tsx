import React from "react";
import Title from "./Reusable/Title";
import adventures from "../fake-data/adventures";
import Select2 from "./Reusable/Select";
import { Input, DatePicker, TimePicker, InputNumber, Button } from "antd";
import moment from 'moment';

const AddGroup = () => {
  const places = [
    { id: 1, name: "Buitrago de Lozoya" },
    { id: 2, name: "El Atazar" },
    { id: 3, name: "Guadarrama" },
    { id: 4, name: "Navacerrada" },
    { id: 5, name: "Rascafría" },
    { id: 6, name: "San Martín de Valdeiglesias" },
  ];

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__container">
          <Title title="Añadir Grupo" />
          <form action="">
            <Input placeholder="Nombre del grupo" />
            <br />
            <Select2 placeholder="Tipo de Actividad" options={adventures} />
            <Select2 placeholder="Lugar" options={places} />
            <br />
            <DatePicker placeholder="Fecha" />
            <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} placeholder="Hora" />
            <br />
            <label htmlFor="" style={{color: "rgba(0,0,0,0.5)"}}>Tamaño máximo del grupo: </label>
            <InputNumber min={2} max={35} defaultValue={10} />
            <br/>
            <Button block>Crear grupo</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
