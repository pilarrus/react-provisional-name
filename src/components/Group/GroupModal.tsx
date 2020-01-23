import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import UserContext from "../../contexts/UserContext";
import { Group, Users2 } from "../../types";
import { userSignOnGroup } from "../../utils/functions";
import ButtonClose from "../Reusable/ButtonClose";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import FormatDate from "../Reusable/FormatDate";
import TitleSmall from "../Reusable/TitleSmall";
import Avatar from "./Avatar";
import GroupService from "../../services/groupServices";
import fire from "../../enviroments/enviroment";

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
  let login = contextLog.log;
  console.log("login>>>", login);
  const contextUser = useContext(UserContext);
  let user = contextUser.user;
  console.log("user>>>", user);

  //const noLogin = ()

  const subscribeMe = (text: string) => (
    <ButtonRainbow
      text={text}
      changeState={() => setSignOn(false)}
      disabled={group.users.length === group.maxSize}
    />
  );

  let users: Users2 = group.users;
  let groupService = new GroupService(fire);

  return (
    <div id="id01" className="modal" onClick={changeState}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal_group">
          <ButtonClose changeState={changeState} />
          <div
            className="modal_group__title"
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/react-9cbc4.appspot.com/o/" +
                group.bg +
                ")"
            }}
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

            {login ? (
              userSignOnGroup(group, user) ? (
                //Muestra DESAPUNTARME, si click -> deleteFromUser(group, user);
                subscribeMe("DESAPUNTARME")
              ) : (
                //Muestra APUNTARME, si click -> saveGroupInUser(group, user);
                //subscribeMe("APUNTARME")
                <ButtonRainbow
                text="APUNTARME"
                changeState={() => {
                  setSignOn(true);
                  groupService.saveGroupInUser(group, user);
                }}
                disabled={group.users.length === group.maxSize}
              />
              )
            ) : (
              //Muestra APUNTARME, si click -> redirige a Login/Register
              <ButtonRainbow
                text="APUNTARME"
                changeState={() => {
                  setSignOn(true);
                  return <Redirect to="/login" />
                }}
                disabled={group.users.length === group.maxSize}
              />
            )}

            {signOn ? (
              contextLog.log ? (
                console.log(
                  "Añadir usuario al grupo y mostrar mensaje de éxito"
                )
              ) : (
                <Redirect to="/login" />
              ) //console.log("Redirigir a Login")
            ) : (
              console.log("nada")
            )}
          </div>
        </div>
      </div>
      {console.log(">>>Apuntarme", signOn)}
    </div>
  );
};

export default GroupModal;
