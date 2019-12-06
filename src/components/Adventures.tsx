import React, { Component } from "react";
import { typeAdventure } from "../types/adventure";
import AdventureComponent from "./Adventure";
import Title from "./Reusable/Title";

export default class Adventures extends Component<{
  adventures: typeAdventure[];
  thermalSensationAPI: string;
}> {
  render() {
    let thermalSensationAPI = this.props.thermalSensationAPI;

    let adventures = this.props.adventures.filter(adventure =>
      (adventure.thermalSensation === thermalSensationAPI) ? true : false
    );

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
          <a href="/alladventures"><button className="btn-purple">Ver más aventuras</button></a>
        </div>
      </section>
    );
  }
}