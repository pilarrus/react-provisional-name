import React from "react";
import { TypeGroup } from "../types";

const GroupModal = (group: TypeGroup) => {

  return (
    <div id="id01" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
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