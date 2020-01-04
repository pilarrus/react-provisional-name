import React from "react";
import icon from "../../images/profile/user.svg";
import { User } from "../../types";
import ImageProfile from "./ImageProfile";
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
        <div className="icon__friends">
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
      <ImageProfile user={user} />
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
