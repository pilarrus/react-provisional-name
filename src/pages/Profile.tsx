import React from "react";
import { RouteComponentProps } from "react-router";
import noimage from "../images/profile/noimage2.png";

export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  let data = RouteComponentProps.location.state; // datos que recibo del formulario de registro

  if (data === undefined) {
    data = {
      name: "Sin nombre"
    };
  }

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
            {data.name}
          </h1>
          <p className="title">Nivel {data.status}</p>
        </div>
        <div className="profile__picture">
          <img src={noimage} alt="you" />
        </div>
      </div>

      <div className="profile__card">
        <div className="profile__card-box">
          <div>
            <p>Contacta conmigo </p>
            <button>Email</button>
          </div>

          <div>
            <i className="fa fa-dribbble"></i>

            <i className="fa fa-twitter"></i>

            <i className="fa fa-linkedin"></i>

            <i className="fa fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className="profile__friends">
        <div>Mis grupos</div>
        <div>Mis Amigos</div>
      </div>
    </div>
  );
};
