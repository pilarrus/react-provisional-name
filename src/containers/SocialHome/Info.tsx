import React from "react";
import Button from "./Button";

export const Info: React.FC<{ changeState: () => void, login: boolean }> = ({ changeState, login }) => {

  return (
    <div className="social__left">
      <Button title={login ? "¿Ya eres miembro? Click aquí" : "¿No eres miembro? Click aquí"} nameClass="social__left-btn" changeState={changeState} />
    </div>
  )
}

export default Info;