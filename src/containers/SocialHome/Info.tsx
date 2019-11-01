import React from "react";
import Button from "./Button";

export const Info = () => {

  return (
    <div className="social__left">
      <h1 className="social__left-title">Únete a nuestra red de aventurer@s</h1>
      <Button title="Registrarme" labelButton="+" />
      <Button title="Ya soy usuario" labelButton="+" />
    </div>
  )
}

export default Info;