import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import Friends from "../components/Profile/Friends";
import Table2 from "../components/Profile/Table";
import dataUsers from "../fake-data/usersRegisters";
import person1 from "../images/profile/person1.jpg";

export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  let data = RouteComponentProps.location.state; // datos que recibo del formulario de registro o del login
  console.log("*******", data.name, data.password);
  if (data === undefined) {
    data = {
      name: "Sin nombre"
    };
  }

  const [userExist, setUserExist] = useState(false);

  console.log(dataUsers[0]);
  console.log(userExist);

  useEffect(() => {
    dataUsers.map(e => {
      if (e.name === data.name && e.password === data.password) {
        return setUserExist(true);
      } else {
        return null; // preguntar: por qué me obliga a retornar algo
      }
    });
  }, [data.name, data.password]);

  return (
    <div className="profile">
      <img src={dataUsers[0].img} alt="img" />
      {
        //caja nombre y foto
      }
      <div className="profile__box name_box">
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
          <img src={person1} alt="you" />
        </div>
      </div>

      {
        //fin caja nombre y foto
      }

      <div>
        <Table2 />
        <Friends />
      </div>
    </div>
  );
};
