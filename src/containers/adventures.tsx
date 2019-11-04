import React from "react";
import climbing from "../images/adventure_climbing.jpg";
import rafting from "../images/adventure_rafting.jpg";
import zip_lines from "../images/adventure_zip_lines.jpg";
import Adventure from "./adventure";

const Adventures = () => {
  let adventures = [
    { name: "Escalada", photo: climbing },
    { name: "Tirolinas", photo: zip_lines },
    { name: "Rafting", photo: rafting }
  ];
  return (
    <section className="adventures">
      <div className="father">
        <h2 className="center">Nuestras aventuras</h2>
      </div>
      <div className="row">
        {adventures.map(adventure => (
          <Adventure
            key={adventure.name}
            name={adventure.name}
            photo={adventure.photo}
          />
        ))}
      </div>
      <button>Ver más aventuras</button>
    </section>
  );
};

export default Adventures;
