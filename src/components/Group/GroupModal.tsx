import React, { useEffect } from "react";
import { TypeGroup } from "../../types";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import FormatDate from "../Reusable/FormatDate";

type PropsGroup = {
  group: TypeGroup;
  changeState: () => void;
};

const GroupModal: React.FC<PropsGroup> = ({ group, changeState }) => {
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
    <div id="id01" className="modal" onClick={changeState}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__container">
          <p>{group.name}</p>
          <div>Fecha: <FormatDate timestamp={group.timestamp}/></div>
          <p>Lugar: {group.place}</p>
          <p>Tamaño máximo: {group.sizeGroup}</p>
          <p>Usuarios apuntados:</p>
          {group.users.map(user => (
            <div>{user}</div>
          ))}
          <ButtonRainbow text="APUNTARME" />
        </div>
      </div>
    </div>
  );
};

export default GroupModal;
