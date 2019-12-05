import React from "react";
import { RouteComponentProps } from "react-router";

export const Profile: React.FC<RouteComponentProps> = RouteComponentProps => {
  const data = RouteComponentProps.location.state; // datos que recibo del formulario de registro
  console.log(data);
  return (
    <div>
      Welcome {data.name}
      <div>bien</div>
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
