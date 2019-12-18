import React from "react";
import AdventureComponent from "../components/Adventure/Adventure";
import Title from "../components/Reusable/Title";
import adventures from "../fake-data/adventures";

class Adventures extends React.Component {
  render() {
    return (
      <section className="adventures">
        <Title title="Todas nuestras aventuras" />
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
        </div>
      </section>
    );
  }
}
export default Adventures;
