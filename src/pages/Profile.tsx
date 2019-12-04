import React from "react";
import { RouteComponentProps } from "react-router";

export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  const data = RouteComponentProps.location.state; // datos que recibo del formulario de registro
  console.log(data);
  return (
    <div className="profile">
      <div className="profile__left"> Welcome {data.name}</div>
      <div className="profile__center">
        <img src="../images/profile/noimage.jpg" />
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

      <div>Mis grupos</div>
      <div>Mis Amigos</div>
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
