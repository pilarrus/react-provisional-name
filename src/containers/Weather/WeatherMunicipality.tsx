import React from "react";
import config from "../../config";
import Selected from "./Selected";

const postalCode = "28022";

class WeatherMunicipality extends React.Component {
  state = {
    loading: false,
    dataTemperature: []
  };

  componentDidMount() {
    //console.log(">>>>>>", process.env); 
    fetch(`${config.aemet.urltemperature}/${postalCode}?api_key=${config.aemet.apiKey}`)
      .then(response => response.json())
      .then(response => fetch(response.datos)
        .then(response => response.json()))
      .then(data => this.setState({ loading: true, dataTemperature: data }));
  }

  componentDidUpdate() {
    // POR MUNICIPIOS
    console.log(this.state.dataTemperature[0]);
    console.log("Municipio", this.state.dataTemperature[0]['nombre']);
    console.log("Día", this.state.dataTemperature[0]['prediccion']['dia'][0]['fecha']);
    console.log(this.state.dataTemperature[0]['prediccion']['dia'][0]['temperatura']);
    console.log("Temperatura máxima", this.state.dataTemperature[0]['prediccion']['dia'][0]['temperatura']['maxima']);
    console.log("Temperatura mínima", this.state.dataTemperature[0]['prediccion']['dia'][0]['temperatura']['minima']);
    console.log(this.state.loading);
  }


  render() {
    return <div className="weather">Municipio!
<Selected />


    </div>;
  }
}

export default WeatherMunicipality;
