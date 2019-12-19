import React from "react";
import noimage from "../../images/profile/noimage.png";
import { User } from "../../types";

export const Info: React.FC<{
  user: User;
}> = ({ user }) => {
  return (
    <div className="profile__name">
      <div className="profile__name-welcome">
        <h1>
          {user.gender === "male"
            ? "Bienvenido"
            : user.gender === "female"
            ? "Bienvenida"
            : "Bienvenid@"}
          <span> {user.name}</span>
        </h1>
        <p>Nivel {user.level}</p>
      </div>
      <div className="profile__name-picture">
        <img src={user.img === undefined ? noimage : user.img} alt="you" />
      </div>
    </div>
  );
};

export default Info;

/*

 <h1>
          {data.gender === "male"
            ? "Bienvenido"
            : data.gender === "female"
            ? "Bienvenida"
            : "Bienvenid@"}
          <span> {data.name}</span>
        </h1>
        <p className="title">Nivel {data.status}</p>

        */
