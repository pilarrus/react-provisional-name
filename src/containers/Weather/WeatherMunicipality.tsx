import React from "react";
import Title from "../../components/Reusable/Title";

const WeatherMunicipality: React.FC<{
  tempMax: number;
  tempMin: number;
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
