import React from "react";
import { RouteComponentProps } from "react-router";
import Friends from "../components/Profile/Friends";
import Info from "../components/Profile/PersonalInfo";
import Table2 from "../components/Profile/Table";
import { User } from "../types";

export const Profile: React.FC<RouteComponentProps<
  {},
  {},
  User
>> = RouteComponentProps => {
  let user = RouteComponentProps.location.state; // datos que recibo del formulario de registro o del login

  return (
    <div className="profile">
      <Info user={user} />
      {user.myFriends ? <Friends friends={user.myFriends} /> : null}
      <Table2 />
    </div>
  );
};
