import React from "react";
//import { Group } from "../types/types";

type PropsGroup = {
  name: string;
  place: string;
  timestamp: number;
};

const groupStyle = {
  height: "200px",
  border: "1px solid black",
  borderRadius: "5px"
};

const Group: React.FC<PropsGroup> = ({ name, place, timestamp }) => {
  let date = new Date(timestamp * 1000);
  let dia = date.getDate();
  let mes = date.getMonth()+1;
  let año = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return (
    <div className="group" style={groupStyle}>
      <h3>{name}</h3>
      <p>{place}</p>
      <p>{dia + "/" + mes + "/" + año + " " + hour + ":" + minutes}</p>
      <div className="btn--rainbow">
        <button type="submit" className="btn">Ver</button>
      </div>
    </div>
  );
};

export default Group;
