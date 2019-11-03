import React from "react";

const Button: React.FC<{ title: string, nameClass: string, changeState?: () => void }> = ({ title, nameClass, changeState }) => (
  <div className={nameClass}>
    <button onClick={changeState} >{title}</button>
  </div>
);

export default Button;