import React from "react";

//import { Group } from "../types/types";
type GrupoProps = {
  name: string;
}

const groupStyle = {
  height: '200px',
  border: '1px solid black',
};

const Group:React.FC<GrupoProps> = ({name}) => {
  return (
    <div className="group" style={groupStyle}>
      <h3>{name}</h3>
    </div>
  );
};

export default Group;
