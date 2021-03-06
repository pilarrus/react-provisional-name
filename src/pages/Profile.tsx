import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import Form from "../components/Form/SocialHome";
import ButtonsGroups from "../components/Profile/Buttons";
import Friends from "../components/Profile/Friends";
import NoFriends from "../components/Profile/NoFriends";
import Info from "../components/Profile/PersonalInfo";
import GroupsContext from "../contexts/GroupsContext";
import LoginContext from "../contexts/LoginContext";
import subscribeMeGroupContext from "../contexts/SubscribMeGroupContext";
import UserContext from "../contexts/UserContext";
import {
  default as fire,
  default as firebase
} from "../enviroments/enviroment";
import bell from "../images/profile/campana.svg";
import iconNo from "../images/profile/no.svg";
import iconSi from "../images/profile/si.svg";
import GroupService from "../services/groupServices";
import { User } from "../types";
import { updateGroups, updateUser, userSignOnGroup } from "../utils/functions";

export const Profile: React.FC<RouteComponentProps<
  {},
  {},
  User
>> = RouteComponentProps => {
  const contextLog = useContext(LoginContext); // El usuario conectado
  const dbRef = firebase
    .database()
    .ref("db")
    .child("users"); // referencia a users de firebase

  //@ts-ignore
  const [request, setRequest] = useState([] as string[]);

  const [display, setDisplay] = useState(false);
  const style = {
    width: "30px"
  };

  let subscribeMeGroup = useContext(subscribeMeGroupContext);

  const [user, setUser] = useState(RouteComponentProps.location.state);

  const contextUser = useContext(UserContext);

  const contextGroups = useContext(GroupsContext);

  useEffect(() => {
    if (user.request) {
      setRequest(user.request);
    }
  }, [user.request]);

  const addFriend = (friend: string) => {
    //AÑADIR A AMIGOS DEL USUARIO QUE ACEPTA LA AMISTAD:
    var key;
    if (contextUser.user.myFriends) {
      key = contextUser.user.myFriends.length;
    } else {
      key = 0;
    }
    dbRef.child(`${contextUser.user.id}/myFriends`).update({ [key]: friend });

    // AÑADIR AL USUARIO QUE SOLICITA LA AMISTAD EL USUARIO QUE ACEPTA LA AMISTAD
    //SI ME APETECE LO HAGO, DE MOMENTO NO ME APETECE

    //BORRAR DE REQUEST CUANDO SE ACEPTA LA AMISTAD:

    let r2 = contextUser.user.request;

    if (!Array.isArray(r2)) {
      r2 = Object.values(r2);
    }
    r2.forEach(element => {
      if (element === friend) {
        const entries = Object.entries(contextUser.user.request);
        entries.forEach(element => {
          if (element[1] === friend) {
            var num = element[0];
            dbRef
              .child(`${contextUser.user.id}/request`)
              .child(num.toString())
              .remove();
          }
        });
      }
    });

    //ACTUALIZAR DATOS DEL USUARIO CONECTADO CON LOS NUEVOS DATOS DE FIREBASE
    dbRef.once("value", snap => {
      snap.forEach(e => {
        const newVal: User = e.val();
        if (newVal.id === user.id) {
          setUser(newVal);
          contextUser.setUser(newVal);
        }
      });
    });
  };

  const removeFriend = (friend: string) => {
    contextUser.user.request.forEach(element => {
      if (element === friend) {
        const entries = Object.entries(contextUser.user.request);
        entries.forEach(element => {
          if (element[1] === friend) {
            var num = element[0];
            dbRef
              .child(`${contextUser.user.id}/request`)
              .child(num.toString())
              .remove();
          }
        });
      }
    });

    //ACTUALIZAR DATOS DEL USUARIO CONECTADO CON LOS NUEVOS DATOS DE FIREBASE
    dbRef.once("value", snap => {
      snap.forEach(e => {
        const newVal: User = e.val();
        if (newVal.id === user.id) {
          setUser(newVal);
          contextUser.setUser(newVal);
        }
      });
    });
  };

  if (user) {
    contextLog.setLog(true);
    if (
      contextLog.log &&
      subscribeMeGroup.subscribMe &&
      !userSignOnGroup(subscribeMeGroup.group, user)
    ) {
      let groupService = new GroupService(fire);
      groupService.saveGroupInUser(subscribeMeGroup.group, user, true);
      updateUser(user, contextUser.setUser, setUser);
      updateGroups(contextGroups.setGroups);
      subscribeMeGroup.setSubscribMe(false);
    }

    let r = user.request;

    if (r) {
      if (!Array.isArray(r)) {
        r = Object.values(r);
      }
    }
    
    return (
      <div className="profile">
        {contextUser.user ? (
          <Info user={contextUser.user} />
        ) : (
          <Info user={user} />
        )}
        <div className="request" onSubmit={e => e.preventDefault}>
          {user.request ? (
            <div className="request-aviso" onClick={() => setDisplay(!display)}>
              <p>¡Tienes nuevas solicitudes de amistad!</p>
              <div>
                <img src={bell} alt="icon" className="request-icon" />
              </div>
            </div>
          ) : null}
          {display ? (
            <div className="request-friends">
              {user.request
                ? r.map(e => (
                    <div key={e} className="request-friends-box">
                      <div>
                        <p>{e}</p>
                        <span onClick={() => addFriend(e)}>
                          <img
                            src={iconSi}
                            alt="iconsi"
                            className="icon"
                            style={style}
                          />
                        </span>
                        <span onClick={() => removeFriend(e)}>
                          <img
                            src={iconNo}
                            alt="iconno"
                            className="icon"
                            style={style}
                          />
                        </span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          ) : null}
        </div>

        {user.myFriends ? (
          <Friends friends={user.myFriends} />
        ) : (
          <div>
            <NoFriends />
          </div>
        )}

        <ButtonsGroups user={user} setUser={setUser} />
      </div>
    );
  } else {
    return <Form />;
  }
};
