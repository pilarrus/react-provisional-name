import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import Form from "../components/Form/SocialHome";
import Friends from "../components/Profile/Friends";
import ButtonsGroups from "../components/Profile/Buttons";
import NoFriends from "../components/Profile/NoFriends";
import Info from "../components/Profile/PersonalInfo";
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
import { userSignOnGroup } from "../utils/functions";

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
  const [request, setRequest] = useState([] as string[]);
  
  const [display, setDisplay] = useState(false);
  const style = {
    width: "30px"
  };

  let subscribeMeGroup = useContext(subscribeMeGroupContext);

  const [user, setUser] = useState(RouteComponentProps.location.state);

  const contextUser = useContext(UserContext);
  console.log('--------contextUser--------Profile', contextUser.user);

  useEffect(() => {
    console.log("useEffect");
    if (user.request) {
      setRequest(user.request);
    }
  }, [user.request]);

  const updateContextUser = () => {
    console.log("updateContextUser");
    const usersFire = fire
    .database()
    .ref(`db/users`);

    const cbk = (snapshot: firebase.database.DataSnapshot) => {
      if(contextUser.user) {
        snapshot.forEach(u => {
          const newVal: User = u.val();
          if (newVal.id === contextUser.user.id) {
            setUser(newVal);
            contextUser.setUser(newVal);
          }
        });
      }
    };

    usersFire.once("value", cbk);
  };

  const addFriend = (friend: string) => {
    console.log("addFriend");
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
    contextUser.user.request.forEach(element => {
      console.log("borrar request");
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
      console.log("actualizar datos");
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
    //console.log("RECHAZO A:", friend);
    console.log("rachazar");
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
      console.log("actualizar user");
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
      groupService.saveGroupInUser(
        subscribeMeGroup.group,
        user,
        true
      );
      updateContextUser();
      subscribeMeGroup.setSubscribMe(false);
    }
    return (
      <div className="profile">
        {contextUser.user ? <Info user={contextUser.user} /> : <Info user={user} />}
        <div className="request">
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
                ? request.map(e => (
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

        {contextUser.user ? <ButtonsGroups /> : ""}
      </div>
    );
  } else {
    return <Form />;
  }
};
