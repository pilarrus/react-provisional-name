import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import Form from "../components/Form/SocialHome";
import Friends from "../components/Profile/Friends";
import Info from "../components/Profile/PersonalInfo";
import Table2 from "../components/Profile/Table";
import LoginContext from "../contexts/LoginContext";
import { User } from "../types";

export const Profile: React.FC<RouteComponentProps<
  {},
  {},
  User
>> = RouteComponentProps => {
  let user = RouteComponentProps.location.state; // datos que recibo del formulario de registro o del login
  const contextLog = useContext(LoginContext);
  console.log("CONTEXT EN PROFILE", contextLog);

  useEffect(() => {
    contextLog.setLog(!contextLog.log);
  }, [user]);

  if (user) {
    return (<div className="profile">
      <Info user={user} />
      {user.myFriends ? <Friends friends={user.myFriends} /> : <div>Todavía no tienes amig@s</div>}
      <Table2 />
    </div>
    );
  } else {
    return (<Form />);
  }


};
