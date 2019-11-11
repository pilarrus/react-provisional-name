import React from "react";
import Title from "../../components/Reusable/Title";

const WeatherMunicipality: React.FC<{
  tempMax: string;
  tempMin: string;
  municipality: string;
}> = ({ tempMax, tempMin, municipality }) => (
  <div className="weather">
    <Title title="El tiempo" />
    <div className="weather__content">
      <div className="weather__content-name">
        <p>{municipality}</p>
      </div>
      <div className="weather__content-temp">
        <div>
          <p>
            Máxima <span>{tempMax}°C</span>
          </p>
          <p>
            Mínima <span>{tempMin}°C</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default WeatherMunicipality;

/*componentDidUpdate() {
    // POR MUNICIPIOS
    console.log(this.state.dataTemperature[0]);
    console.log("Municipio", this.state.dataTemperature[0]["nombre"]);
    console.log(
      "Día",
      this.state.dataTemperature[0]["prediccion"]["dia"][0]["fecha"]
    );
    console.log(
      this.state.dataTemperature[0]["prediccion"]["dia"][0]["temperatura"]
    );
    console.log(
      "Temperatura máxima",
      this.state.dataTemperature[0]["prediccion"]["dia"][0]["temperatura"][
        "maxima"
      ]
    );
    console.log(
      "Temperatura mínima",
      this.state.dataTemperature[0]["prediccion"]["dia"][0]["temperatura"][
        "minima"
      ]
    );
    console.log(this.state.loading);
  }*/
