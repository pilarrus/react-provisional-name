import React from "react";

//import { Group } from "../types/types";
type GrupoProps = {
  name: string;
}

const Grupo:React.FC<GrupoProps> = ({name}) => {
  return (
    <>
      <h3>{name}</h3>
    </>
  );
};

export default Grupo;
