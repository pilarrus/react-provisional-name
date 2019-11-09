import React from "react";
import config from "../../config";
import PruebaSelect from "./PruebaSelect";
import Selected from "./Selected";
import WeatherMunicipality from "./WeatherMunicipality";

class WeatherHome extends React.Component {
  state = {
    loading: false,
    dataTemperature: [],
    selectedMun: "28079"
  };

  componentDidMount() {
    //console.log(">>>>>>", process.env);
    fetch(
      `${config.aemet.urltemperature}/${this.state.selectedMun}?api_key=${config.aemet.apiKey}`
    )
      .then(response => response.json())
      .then(response => fetch(response.datos).then(response => response.json()))
      .then(data => this.setState({ loading: true, dataTemperature: data }));
  }

  render() {
    if (this.state.dataTemperature.length > 0) {
      return (
        <section>
          <WeatherMunicipality
            tempMax={
              this.state.dataTemperature[0]["prediccion"]["dia"][0][
                "temperatura"
              ]["maxima"]
            }
            tempMin={
              this.state.dataTemperature[0]["prediccion"]["dia"][0][
                "temperatura"
              ]["minima"]
            }
            municipality={this.state.dataTemperature[0]["nombre"]}
          />
          <Selected />
          <PruebaSelect />
        </section>
      );
    } else {
      return (
        <div className="weather-charge">
          <p>Cargando...</p>
        </div>
      );
    }
  }
}

export default WeatherHome;
