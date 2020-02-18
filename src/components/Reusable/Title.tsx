import React from "react";

const name = (title: string) => {
  return title.toLowerCase().includes("aventuras")
    ? "clearblueclass"
    : title.toLowerCase().includes("grupos")
    ? "blueclass"
    : title.toLowerCase().includes("contacto")
    ? "purpleclass"
    : title.toLowerCase().includes("nosotros")
    ? "greenclass"
    : title.toLowerCase().includes("accede a nuestra red social")
    ? "secondpurpleclass"
    : "defaultclass";
};

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div>
    <h1 className={name(title)}>{title}</h1>
  </div>
);

export default Title;
