import React from "react";
import Select from "react-select";
import madridMun from "./municipality_codes";
import WeatherMunicipality from "./WeatherMunicipality";

const options = madridMun;

type props = {
  tempMax: number;
  tempMin: number;
  municipality: string;
  handlerState: (option: any) => void;
};

const value = null;

const WeatherPrueba2: React.FC<props> = props => (
  <section data-testid="weatherTest">
    <WeatherMunicipality
      tempMax={props.tempMax}
      tempMin={props.tempMin}
      municipality={props.municipality}
    />
    <div className="weather__select">
      <p>Busca tu municipio</p>
      <div className="weather__select-box">
        <Select
          value={value}
          options={options}
          isClearable={true}
          onChange={props.handlerState}
        />
      </div>
    </div>
  </section>
);

export default WeatherPrueba2;
