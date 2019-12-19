import React from "react";
import person1 from "../../images/profile/person1.jpg";
import { User } from "../../types";

export const Info: React.FC<{
  data: User;
}> = ({ data }) => {
  //console.log(">>>>>>>>>>> PERSONAL INFO", data);
  return (
    <div className="profile__box name_box">
      <div className="profile__name"></div>
      <div>Holaaaaaaaaaaaaa {data.name}</div>
      <div className="profile__picture">
        <img src={person1} alt="you" />
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
