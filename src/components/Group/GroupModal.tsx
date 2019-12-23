import React, { useEffect } from "react";
import { TypeGroup, Users2 } from "../../types";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import FormatDate from "../Reusable/FormatDate";
import Avatar from "./Avatar";

type PropsGroup = {
  group: TypeGroup;
  changeState: () => void;
};
/*type PartialUser = {
  nick: string;
  img: string;
}
type Users2 = PartialUser[];*/

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

  let users: Users2 = group.users;

  return (
    <div id="id01" className="modal" onClick={changeState}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__container">
          <p>{group.name}</p>
          <div>
            Fecha: <FormatDate timestamp={group.timestamp} />
          </div>
          <p>Lugar: {group.place}</p>
          <p>Tamaño máximo: {group.sizeGroup}</p>
          <p>Usuarios apuntados:</p>
          {group.users !== [] &&
            users.map((user) => (
              <Avatar key={user.nick} nick={user.nick} img={user.img} />
            ))}
          <ButtonRainbow text="APUNTARME" />
        </div>
      </div>
    </div>
  );
};

export default GroupModal;
