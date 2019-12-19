import React from "react";
import { RouteComponentProps } from "react-router";
import Friends from "../components/Profile/Friends";
import Info from "../components/Profile/PersonalInfo";
import Table2 from "../components/Profile/Table";
import { User } from "../types";

/*export type User = {
  id: number;
  nick: string;
  password: string;
  nivel: string;
  email: string;
  name: string;
  misgrupos: string[];
  misAmigos: string[];
  img: string;
};*/

export const Profile: React.FC<RouteComponentProps<
  {},
  {},
  User
>> = RouteComponentProps => {
  let user = RouteComponentProps.location.state; // datos que recibo del formulario de registro o del login

  console.log(user);
  // console.log("***EN PROFILE", RouteComponentProps.history.location.state.data);

  return (
    <div className="profile">
      {'<img src={dataUsers[0].img} alt="img" />'}
      <div>
        <Table2 />
        <Friends />
        <Info data={user} />"
      </div>
    </div>
  );
};
