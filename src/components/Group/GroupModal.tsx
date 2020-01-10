import React, { useEffect, useState, useContext } from "react";
import { TypeGroup, Users2 } from "../../types";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import FormatDate from "../Reusable/FormatDate";
import Avatar from "./Avatar";
import TitleSmall from "../Reusable/TitleSmall";
import LoginContext from "../../contexts/LoginContext";

type PropsGroup = {
  group: TypeGroup;
  changeState: () => void;
};

const GroupModal: React.FC<PropsGroup> = ({ group, changeState }) => {
  const [signOn, setSignOn] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        changeState();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [changeState]);

  const contextLog = useContext(LoginContext);
  console.log(">>>", contextLog.log);

  let users: Users2 = group.users;

  return (
    <div id="id01" className="modal" onClick={changeState}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div className="modal__container">
          <TitleSmall title={group.name}></TitleSmall>
          <div>
            Fecha: <FormatDate timestamp={group.timestamp} />
          </div>
          <p>Lugar: {group.place}</p>
          <p>Tamaño máximo: {group.sizeGroup}</p>
          <p>Usuarios apuntados:</p>
          <div className="container_avatars">
            {group.users !== [] &&
              users.map(user => (
                <Avatar key={user.nick} nick={user.nick} img={user.img} />
              ))}
          </div>
          <ButtonRainbow
            text="APUNTARME"
            changeState={() => setSignOn(!signOn)}
          />
          {signOn
            ? contextLog.log
              ? console.log(
                  "Añadir usuario al grupo y mostrar mensaje de éxito"
                )
              : console.log("Redirigir a Login")
            : console.log("nada")}
        </div>
      </div>
      {console.log(">>>Apuntarme", signOn)}
    </div>
  );
};

export default GroupModal;
