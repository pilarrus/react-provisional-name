import React, { useContext } from "react";
import { RouteComponentProps } from "react-router";
import Form from "../components/Form/SocialHome";
import Friends from "../components/Profile/Friends";
import ProfileGroups from "../components/Profile/Groups";
import Info from "../components/Profile/PersonalInfo";
import LoginContext from "../contexts/LoginContext";
import { User } from "../types";

export const Profile: React.FC<RouteComponentProps<
  {},
  {},
  User
>> = RouteComponentProps => {
  let user = RouteComponentProps.location.state; // datos que recibo del formulario de registro o del login
  const contextLog = useContext(LoginContext);

  if (user) {
    contextLog.setLog(true);
    return (
      <div className="profile">
        <Info user={user} />
        {user.myFriends ? (
          <Friends friends={user.myFriends} />
        ) : (
          <div>Todavía no tienes amig@s</div>
        )}

        <ProfileGroups />
      </div>
    );
  } else {
    return <Form />;
  }
};
