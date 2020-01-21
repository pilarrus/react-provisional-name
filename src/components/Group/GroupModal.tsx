import React, { useEffect, useState, useContext } from "react";
import { Group, Users2 } from "../../types";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import FormatDate from "../Reusable/FormatDate";
import Avatar from "./Avatar";
import TitleSmall from "../Reusable/TitleSmall";
import LoginContext from "../../contexts/LoginContext";
import ButtonClose from "../Reusable/ButtonClose";
import { Redirect } from "react-router-dom";

type GroupModalProps = {
  group: Group;
  changeState: () => void;
};

const GroupModal: React.FC<GroupModalProps> = ({ group, changeState }) => {
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
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal_group">
          <ButtonClose changeState={changeState} />
          <div
            className="modal_group__title"
            style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/react-9cbc4.appspot.com/o/" + group.bg + ")" }}
          >
            <TitleSmall title={group.name} semiTransparent={true}></TitleSmall>
          </div>
          <div className="modal_group__container">
            <div className="modal_group__container--text">
              <FormatDate timestamp={group.timestamp} />

              <p>{group.place}</p>
              <p>
                Participarán{" "}
                {Array.isArray(group.users) ? group.users.length : 0}
                {" de " + group.maxSize}
              </p>
            </div>
            <div className="modal_group__container--avatars">
              {group.users !== [] &&
                users.map(user => (
                  <Avatar key={user.nick} nick={user.nick} img={user.img} />
                ))}
            </div>
            <ButtonRainbow
              text="APUNTARME"
              changeState={() => setSignOn(!signOn)}
              disabled={group.users.length === group.maxSize}
            />
            {signOn
              ? contextLog.log
                ? console.log(
                    "Añadir usuario al grupo y mostrar mensaje de éxito"
                  )
                : <Redirect to='/login'/>//console.log("Redirigir a Login")
              : console.log("nada")}
          </div>
        </div>
      </div>
      {console.log(">>>Apuntarme", signOn)}
    </div>
  );
};

export default GroupModal;
