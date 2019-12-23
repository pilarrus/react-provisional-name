import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TypeAdventure } from "../../types";
import Title from "../Reusable/Title";
import AdventureComponent from "./Adventure";

export default class Adventures extends Component<{
  adventures: TypeAdventure[];
  thermalSensationAPI: string;
}> {
  render() {
    let thermalSensationAPI = this.props.thermalSensationAPI;

    let adventures = this.props.adventures.filter(adventure =>
      adventure.thermalSensation === thermalSensationAPI ? true : false
    );

    return (
      <section className="adventures">
        <Title title="Nuestras aventuras" />
        <div className="adventures__container">
          <div className="adventures__container-box">
            {adventures.map(adventure => (
              <AdventureComponent
                key={adventure.id}
                id={adventure.id}
                name={adventure.name}
                photo={adventure.photo}
                info={adventure.info}
              />
            ))}
          </div>
          <Link to="/alladventures">
            <button className="adventures__btn">Ver más aventuras</button>
          </Link>
        </div>
      </section>
    );
  }
}
