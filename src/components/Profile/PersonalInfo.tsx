import React from "react";
import noimage from "../../images/profile/noimage.png";
import { User } from "../../types";

export const Info: React.FC<{
  user: User;
}> = ({ user }) => {
  return (
    <div className="profile__info">
      <div className="profile__info-name">
        <h1 className="heading heading--stroke heading--shadow">
          {user.gender === "male"
            ? "Bienvenido"
            : user.gender === "female"
            ? "Bienvenida"
            : "Bienvenid@"}
          <br></br>
          <span className="heading heading--stroke heading--shadow">
            {user.name}
          </span>
        </h1>
      </div>
      <div className="profile__info-picture">
        <img src={user.img === undefined ? noimage : user.img} alt="you" />
        <p className="profile__info-picture-text">Nivel {user.level}</p>
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
