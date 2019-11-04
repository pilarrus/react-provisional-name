import React from "react";
import Adventure from "./adventure";
import climbing from "../images/adventure_climbing.jpg";
import zip_lines from "../images/adventure_zip_lines.jpg";
import rafting from "../images/adventure_rafting.jpg";

const Adventures = () => {
  let adventuresName = [
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
        {adventuresName.map(obj => (
          <Adventure key={obj.name} name={obj.name} photo={obj.photo} />
        ))}
      </div>
      <button>Ver más aventuras</button>
    </section>
  );
};

export default Adventures;
