import React from "react";

const name = (title: string) => {
  return title.toLowerCase().includes("aventuras")
    ? "redclass"
    : title.toLowerCase().includes("grupos")
    ? "clearblueclass"
    : title.toLowerCase().includes("contacto")
    ? "greenclass"
    : title.toLowerCase().includes("nosotros")
    ? "purpleclass"
    : title.toLowerCase().includes("home")
    ? "yellowclass"
    : "defaultclass";
};

const Title: React.FC<{ title: string }> = ({ title }) => (
  <div className="divtitle">
    <h1 className={name(title)}>{title}</h1>
  </div>
);

export default Title;
