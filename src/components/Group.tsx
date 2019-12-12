import React from "react";
//import { Group } from "../types/types";

type PropsGroup = {
  name: string;
  place: string;
  timestamp: number;
};

const groupStyle = {
  height: "200px",
  border: "1px solid black"
};

const Group: React.FC<PropsGroup> = ({ name, place, timestamp }) => {
  let date = new Date(timestamp * 1000);
  let dia = date.getDate();
  let mes = date.getMonth()+1;
  let año = date.getFullYear();

  //console.log(date);
  return (
    <div className="group" style={groupStyle}>
      <h3>{name}</h3>
      <p>{place}</p>
      <p>{dia + "/" + mes + "/" + año}</p>
      <button type="submit"></button>
    </div>
  );
};

export default Group;
