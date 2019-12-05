import React from "react";
import { RouteComponentProps } from "react-router";
import noimage from "../images/profile/noimage.png";
export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  const data = RouteComponentProps.location.state; // datos que recibo del formulario de registro
  console.log(data);

  const styleImg = {
    width: "100%",
    height: "300px"
  };

  return (
    <div>
      <section className="profile">
        <div className="profile__left"> Welcome {data.name}</div>
        <div className="profile__center">
          <img src={noimage} style={styleImg} />
        </div>
        <div className="profile__right">
          <ul>
            <div>
              <li>Configuración</li>
              <li>Temas</li>
              <li>Logout</li>
            </div>
          </ul>
        </div>
      </section>

      <section className="profile">
        <div className="profile__left-groups">Mis grupos</div>
        <div className="profile__right-friends">Mis Amigos</div>
      </section>
    </div>
  );
};

/*

import React from "react";

interface props {
  data: string[];
}

export const Profile: React.FC<props> = props => {
  console.log(props);
  return (
    <div>
      {props.data.map(e => (
        <div key={e}> {e} </div>
      ))}
    </div>
  );
};

*/
