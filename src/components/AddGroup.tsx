import React from "react";
import Title from "./Reusable/Title";
import adventures from "../fake-data/adventures";
import Select2 from "./Reusable/Select";

const AddGroup = () => {
  return (
    <div className="group__modal">
      <div className="group__modal--content">
        <div className="group__modal--container">
          <Title title="Añadir Grupo" />
          <form action="">
            <input type="text" placeholder="Nombre" />
            <label htmlFor="">Tipo Actividad:</label>
            <select name="" id="">
              {adventures.map(adventure => (
                <option key={adventure.id}>{adventure.name}</option>
              ))}
            </select>
            <Select2/>
            <label htmlFor="">Fecha</label>
            <input type="date" name="" id=""/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
