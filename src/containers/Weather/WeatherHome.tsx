import React, { useState } from "react";
import Select from "react-select";
import madridMun from "./municipality_codes";
import WeatherMunicipality from "./WeatherMunicipality";

const options = madridMun;

type props = {
  tempMax: number;
  tempMin: number;
  municipality: string;
  change: (option: any) => void;
};

const WeatherHome: React.FC<props> = props => {
  const [value, setValue] = useState(props.municipality);
  const handleChange = (v: any) => {
    setValue(v);
    props.change(v);
  };

  return (
    <section data-testid="weatherTest">
      <WeatherMunicipality
        tempMax={props.tempMax}
        tempMin={props.tempMin}
        municipality={props.municipality}
      />
      <div className="weather__p">
        <p>Busca tu municipio</p>
        <div className="weather__select-box">
          <div className="select">
            <Select<any>
              value={value}
              placeholder="Municipios"
              options={options}
              isClearable={true}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherHome;
