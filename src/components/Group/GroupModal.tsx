import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import UserContext from "../../contexts/UserContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { Group, Users2 } from "../../types";
import { userSignOnGroup, countUsers } from "../../utils/functions";
import ButtonClose from "../Reusable/ButtonClose";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import FormatDate from "../Reusable/FormatDate";
import TitleSmall from "../Reusable/TitleSmall";
import Avatar from "./Avatar";

type GroupModalProps = {
  group: Group;
  viewMore: () => void;
};

const GroupModal: React.FC<GroupModalProps> = ({ group, viewMore }) => {
  const [subscribeMe, setSubscribeMe] = useState(false);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        viewMore();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [viewMore]);

  const contextLog = useContext(LoginContext);
  let online = contextLog.log;
  console.log("online>>>", online);
  const contextUser = useContext(UserContext);
  let userOnline = contextUser.user;
  console.log("userOnline>>>", userOnline);

  let users: Users2 = group.users;
  let groupService = new GroupService(fire);

  //let numUsers: number = countUsers(users);

  return (
    <div id="id01" className="modal" onClick={viewMore}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal_group">
          <ButtonClose viewMore={viewMore} />
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
                {Array.isArray(group.users) ? countUsers(users) : 0}
                {" de " + group.maxSize}
              </p>
            </div>
            <div className="modal_group__container--avatars">
              {group.users !== [] &&
                users.map(user => (
                  <Avatar key={user.nick} nick={user.nick} img={user.img} />
                ))}
            </div>

            {online ? (
              userSignOnGroup(group, userOnline) ? (
                //Muestra DESAPUNTARME, si click -> removeFromUser(group, user);
                <ButtonRainbow
                  text="DESAPUNTARME"
                  changeState={() => {
                    setSubscribeMe(false);
                    groupService.removeGroupFromUser(group, userOnline);
                  }}
                />
              ) : (
                //Muestra APUNTARME, si click -> saveGroupInUser(group, user);
                //subscribeMe("APUNTARME")
                <ButtonRainbow
                  text="APUNTARME"
                  changeState={() => {
                    setSubscribeMe(true);
                    groupService.saveGroupInUser(group, userOnline, true);
                  }}
                  disabled={group.users.length === group.maxSize}
                />
              )
            ) : (
              //Muestra APUNTARME, si click -> redirige a Login/Register
              <ButtonRainbow
                text="APUNTARME"
                changeState={() => {
                  setSubscribeMe(true);
                  return <Redirect to="/login" />;
                }}
                disabled={group.users.length === group.maxSize}
              />
            )}
          </div>
        </div>
      </div>
      {console.log("subscribeMe>>>", subscribeMe)}
    </div>
  );
};

export default GroupModal;
