import React from "react";
import Select from "react-select";
import config from "../../config";
import madridMun from "./municipality_codes";
import WeatherMunicipality from "./WeatherMunicipality";

const options = madridMun;

class WeatherHome extends React.Component {
  state = {
    loading: false,
    dataTemperature: [],
    selectedOption: null
  };

  componentDidMount() {
    //console.log(">>>>>>", process.env);
    if (this.state.selectedOption == null) {
      console.log(">>>>>>>>>>>>>>", this.state.selectedOption);
      fetch(
        `${config.aemet.urltemperature}/28079?api_key=${config.aemet.apiKey}`
      )
        .then(response => response.json())
        .then(response =>
          fetch(response.datos).then(response => response.json())
        )
        .then(data => this.setState({ loading: true, dataTemperature: data }));
    }
  }

  componentDidUpdate() {
    fetch(
      `${config.aemet.urltemperature}/${this.state.selectedOption}?api_key=${config.aemet.apiKey}`
    )
      .then(response => response.json())
      .then(response => fetch(response.datos).then(response => response.json()))
      .then(data => this.setState({ loading: true, dataTemperature: data }));
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption: 28 + selectedOption.codmun });
    console.log(selectedOption);
  };

  render() {
    if (this.state.dataTemperature.length > 0) {
      const { selectedOption } = this.state;
      console.log(selectedOption);
      return (
        <section data-testid="weatherTest">
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
          <div className="weather__select">
            <p>Busca tu municipio</p>
            <div className="weather__select-box">
              <Select
                value={selectedOption}
                options={options}
                isClearable={true}
                onChange={this.handleChange}
              />
            </div>
          </div>
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
