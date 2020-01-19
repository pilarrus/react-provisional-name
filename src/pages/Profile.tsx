import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import Form from "../components/Form/SocialHome";
import Friends from "../components/Profile/Friends";
import ProfileGroups from "../components/Profile/Groups";
import NoFriends from "../components/Profile/NoFriends";
import Info from "../components/Profile/PersonalInfo";
import LoginContext from "../contexts/LoginContext";
import UserContext from "../contexts/UserContext";
import firebase from "../enviroments/enviroment";
import iconNo from "../images/profile/no.svg";
import iconSi from "../images/profile/si.svg";
import { User } from "../types";

export const Profile: React.FC<RouteComponentProps<
  {},
  {},
  User
>> = RouteComponentProps => {
  let user = RouteComponentProps.location.state; // datos que recibo del formulario de registro o del login
  const contextLog = useContext(LoginContext); // El usuario conectado
  const dbRef = firebase.database().ref("users"); // referencia a users de firebase
  const [request, setRequest] = useState([] as string[]);
  const contextUser = useContext(UserContext);
  const [display, setDisplay] = useState(false);
  const style = {
    width: "30px"
  };

  useEffect(() => {
    if (user.request) {
      setRequest(Object.values(user.request));
    }
  }, []);

  const addFriend = (friend: string) => {
    var key;
    if (contextUser.user.myFriends) {
      key = contextUser.user.myFriends.length;
    } else {
      key = 0;
    }
    dbRef.child(`${contextUser.user.id}/myFriends`).update({ [key]: friend });
    dbRef.child(`${contextUser.user.id}/request`).remove();
  };

  const removeFriend = (friend: string) => {
    console.log("RECHAZO A:", friend);
  };

  if (user) {
    contextLog.setLog(true);
    return (
      <div className="profile">
        {user.request ? (
          <div onClick={() => setDisplay(!display)}>{request.length}</div>
        ) : null}
        <Info user={user} />
        {display ? (
          <div>
            {user.request
              ? request.map(e => (
                  <div key={e}>
                    <span>{e}</span>
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
                ))
              : null}
          </div>
        ) : null}
        {user.myFriends ? (
          <Friends friends={user.myFriends} />
        ) : (
          <div>
            <NoFriends />
          </div>
        )}

        <ProfileGroups />
      </div>
    );
  } else {
    return <Form />;
  }
};
