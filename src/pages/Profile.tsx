import React from "react";
import { RouteComponentProps } from "react-router";
import noimage from "../images/profile/noimage.png";
export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  let data = RouteComponentProps.location.state; // datos que recibo del formulario de registro
  console.log(data.name);

  const styleImg = {
    width: "50px",
    height: "50px"
  };

  if (data === undefined) {
    data = {
      name: "Sin nombre"
    };
  }
  return (
    <div>
      <h1> `${data.name}`</h1>
      <div className="card">
        <h1>{data.name}</h1>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <div>
          <i className="fa fa-dribbble"></i>

          <i className="fa fa-twitter"></i>

          <i className="fa fa-linkedin"></i>

          <i className="fa fa-facebook"></i>
        </div>
        <p>
          <button>Contact</button>
        </p>
      </div>
      <section className="profile">
        <img src={noimage} style={styleImg} alt="you" />
      </section>

      <div className="profile__left-groups">Mis grupos</div>
      <div className="profile__right-friends">Mis Amigos</div>
    </div>
  );
};
