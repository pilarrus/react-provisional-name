import React from "react";

const name = (title: string) => {
  return title === "Nuestras aventuras"
    ? "redclass" : title === "Grupos"
      ? "clearblueclass" : title === "Eventos"
        ? "greenclass" : title === "Nosotros"
          ? "purpleclass" : title === "Contacto"
            ? "yellowclass" : "defaultclass";

}

const Title: React.FC<{ title: string }> = ({
  title,
}) => (

    <div>
      <h1 className={name(title)}>{title}</h1>
    </div>
  );

export default Title;
