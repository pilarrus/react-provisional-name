import React, { Component } from "react";
import { typeAdventure } from "../types/adventure";
import AdventureComponent from "./Adventure";
import Title from "./Reusable/Title";

export default class Adventures extends Component<{
  adventures: typeAdventure[];
}> {
  render() {
    const { adventures } = this.props;
    return (
      <section className="adventures">
        <Title title="Nuestras aventuras" />
        <div className="adventures__container">
          <div className="adventures__container-box">
            {adventures.map(adventure => (
              <AdventureComponent
                key={adventure.name}
                name={adventure.name}
                photo={adventure.photo}
                info={adventure.info}
              />
            ))}
          </div>
          <button className="btn-purple">Ver más aventuras</button>
        </div>
      </section>
    );
  }
}
/*import climbing from "../images/adventure_climbing.jpg";
import rafting from "../images/adventure_rafting.jpg";
import zip_lines from "../images/adventure_zip_lines.jpg";*/
/*const Adventures = () => {
  let adventures = [
    { name: "Escalada", photo: climbing, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpraesentium magni"},
    { name: "Tirolinas", photo: zip_lines, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpraesentium magni" },
    { name: "Rafting", photo: rafting, info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sintpraesentium magni" }
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
            info={adventure.info}
          />
        ))}
      </div>
      <button>Ver más aventuras</button>
    </section>
  );
};

export default Adventures;*/
