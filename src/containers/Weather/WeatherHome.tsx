import React from "react";
import Title from "../../components/Reusable/Title";
import WeatherMountain from "./WeatherMountain";
import WeatherMunicipality from "./WeatherMunicipality";

class WeatherHome extends React.Component {
  state = {
    loading: false,
    dataTemperature: [],
    dataMountain: []
  };

  /*
  
  EL FETCH ES IGUAL QUE HACER ESTO:
  
  const url = `${config.aemet.url}/${postalCode}?api_key=${config.aemet.apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
      
  const url2 = data.datos;
  const response2 = await fetch(url2);
  const data2 = await response2.json();
      
  console.log(data2);
  
  */

  render() {
    return (
      <div className="weather">
        <Title title="¿Qué tiempo hace hoy?" />
        <WeatherMunicipality />
        <WeatherMountain />
      </div>
    );
  }
}

export default WeatherHome;
