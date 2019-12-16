import React from "react";
import { RouteComponentProps } from "react-router";
import dataUsers from "../fake-data/usersRegisters";
import noimage from "../images/profile/noimage2.png";

export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  let data = RouteComponentProps.location.state; // datos que recibo del formulario de registro

  console.log("*******", data);
  if (data === undefined) {
    data = {
      name: "Sin nombre"
    };
  }

  console.log(dataUsers);

  dataUsers.map(e => console.log(e.nick));

  console.log(data);
  return (
    <div className="profile">
      <div className="profile__box">
        <div className="profile__name">
          <h1>
            {data.gender === "male"
              ? "Bienvenido"
              : data.gender === "female"
              ? "Bienvenida"
              : "Bienvenid@"}
            <span> {data.name}</span>
          </h1>
          <p className="title">Nivel {data.status}</p>
        </div>

        <div className="profile__picture">
          <img src={noimage} alt="you" />
        </div>
      </div>

      <div className="profile__friends">
        <div className="profile__friends-groups">Mis grupos</div>
        <div className="profile__friends-friends">Mis Amigos</div>
      </div>
    </div>
  );
};
