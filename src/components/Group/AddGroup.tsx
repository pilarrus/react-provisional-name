import { Button, DatePicker, Input, InputNumber, TimePicker } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import adventures from "../../fake-data/adventures";
import Select2 from "../Reusable/Select";
import Title from "../Reusable/Title";

type PropsAddGroup = {
  changeState: () => void;
};

const AddGroup: React.FC<PropsAddGroup> = ({ changeState }) => {
  const [name, setName] = useState("");
  console.log(">>>>>>>>>>>>><", name);

  const places = [
    { id: 1, name: "Buitrago de Lozoya" },
    { id: 2, name: "El Atazar" },
    { id: 3, name: "Guadarrama" },
    { id: 4, name: "Navacerrada" },
    { id: 5, name: "Rascafría" },
    { id: 6, name: "San Martín de Valdeiglesias" }
  ];

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        changeState();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [changeState]);

  return (
    <div className="modal" onClick={changeState}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <Title title="Añadir Grupo" />
        <form action="">
          <Input
            placeholder="Nombre del grupo"
            onChange={e => setName(e.target.value)}
          />
          <br />
          <Select2 placeholder="Tipo de Actividad" options={adventures} />
          <Select2 placeholder="Lugar" options={places} />
          <br />
          <DatePicker placeholder="Fecha" />
          <TimePicker
            defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
            placeholder="Hora"
          />
          <br />
          <label htmlFor="" style={{ color: "rgba(0,0,0,0.5)" }}>
            Tamaño máximo del grupo:{" "}
          </label>
          <InputNumber min={2} max={35} defaultValue={10} />
          <br />
          <Button block>Crear grupo</Button>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
