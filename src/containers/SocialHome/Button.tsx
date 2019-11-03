import React from "react";

// Generalizado: le pasas el nombre de la clase y el contenido del botón

const Button: React.FC<{ title: string, nameClass: string }> = ({ title, nameClass }) => (
  <div className={nameClass}>
    <button>{title}</button>
  </div>
);


export default Button;