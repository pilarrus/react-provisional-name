import React from "react";
import { TypeGroup } from "../types";

type PropsGroup = {
  group: TypeGroup;
  changeState?: () => void;
};

const GroupModal: React.FC<PropsGroup> = ({ group, changeState }) => {

  return (
    <div id="id01" className="group__modal" onClick={changeState}>
      <div className="group__modal--content">
        <div className="group__modal--container">
          <p>{group.name}</p>
          <p>Fecha: {group.timestamp}</p>
          <p>Lugar: {group.place}</p>
          <p>Tamaño máximo: {group.sizeGroup}</p>
          <p>Usuarios:</p>
          {group.users.map(user => (
            <div>{user}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupModal;