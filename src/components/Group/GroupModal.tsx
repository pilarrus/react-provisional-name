import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";
import subscribeMeGroupContext from "../../contexts/SubscribMeGroupContext";
import UserContext from "../../contexts/UserContext";
import fire from "../../enviroments/enviroment";
import GroupService from "../../services/groupServices";
import { Group, Users2, User } from "../../types";
import { count, userSignOnGroup } from "../../utils/functions";
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
  const [save, setSave] = useState(false);
  const [remove, setRemove] = useState(false);
  console.log("save->", save, " remove->", remove);

  const contextLog = useContext(LoginContext);
  let online = contextLog.log;
  //console.log("online>>>", online);
  const contextUser = useContext(UserContext);
  let userOnline = contextUser.user;
  console.log("userOnline>>>", userOnline);
  let subscribeMeGroup = useContext(subscribeMeGroupContext);
  //console.log("subscribeMeGroup>>>", subscribeMeGroup);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        viewMore();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [viewMore]);

  useEffect(() => {
    const data = fire.database().ref(`db/users`);

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      if(contextUser.user) {
        snapshot.forEach(u => {
          const newVal: User = u.val();
          if (newVal.id === contextUser.user.id) {
            contextUser.setUser(newVal);
          }
        });
      }
    };

    data.on("value", cbk);

    return () => {
      data.off("value", cbk);
    }

  }, [save, remove]);

  let users: Users2 = group.users;
  let groupService = new GroupService(fire);

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
                Participarán {Array.isArray(group.users) ? count(users) : 0}
                {" de " + group.maxSize}
              </p>
            </div>
            <div className="modal_group__container--avatars">
              {group.users &&
                users.map(user => (
                  <Avatar key={user.nick} nick={user.nick} img={user.img} />
                ))}
            </div>

            {online ? (
              userSignOnGroup(group, userOnline) ? (
                // Usuario online y apuntado al grupo
                <ButtonRainbow
                  text="DESAPUNTARME"
                  changeState={() => {
                    setRemove(true);
                    groupService.removeGroupFromUser(group, userOnline);
                    viewMore();
                  }}
                />
              ) : (
                // Usuario online pero no apuntado al grupo
                <ButtonRainbow
                  text="APUNTARME"
                  changeState={() => {
                    setSave(true);
                    groupService.saveGroupInUser(group, userOnline, true);
                  }}
                  disabled={count(group.users) === group.maxSize}
                />
              )
            ) : (
              // Usuario offline
              <ButtonRainbow
                text="APUNTARME"
                changeState={() => {
                  subscribeMeGroup.setGroup(group);
                  subscribeMeGroup.setSubscribMe(true);
                }}
                disabled={count(group.users) === group.maxSize}
              />
            )}
            {subscribeMeGroup.subscribMe ? <Redirect to="/login" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupModal;
