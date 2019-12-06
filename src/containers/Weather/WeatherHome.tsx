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
  console.log(props);
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
      <div className="weather__select">
        <p>Busca tu municipio</p>
        <div className="weather__select-box">
          <Select<any>
            value={value}
            options={options}
            isClearable={true}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};

export default WeatherHome;
