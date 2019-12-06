import React from "react";
import Load from "../components/Reusable/Loading";
import config from "../config";
import madridMun from "./Weather/municipality_codes";
import WeatherHome from "./Weather/WeatherHome";

type Code = {
  codpro: string;
  codmun: string;
};

type dataTemperatureType = {
  name: string;
  max: number;
  min: number;
};

const options = madridMun;

const madrid: Code = {
  codpro: "28",
  codmun: "079"
};

class ApiWeather extends React.Component {
  state = {
    dataTemperature: {} as dataTemperatureType,
    selectedOption: madrid,
    lenght: 0
  };

  componentDidMount() {
    this.handleapi(this.state.selectedOption);
  }

  componentDidUpdate(_: {}, prevState: any) {
    if (prevState.selectedOption !== this.state.selectedOption) {
      this.handleapi(this.state.selectedOption);
    }
  }

  handleapi = (selectedOption: Code | null) => {
    if (!selectedOption) {
      selectedOption = madrid;
    }
    fetch(
      `${config.aemet.urltemperature}/${selectedOption.codpro +
      selectedOption.codmun}?api_key=${config.aemet.apiKey}`
    )
      .then(response => response.json())
      .then(response => fetch(response.datos).then(response => response.json()))
      .then(data => {
        var temperaturesMunicipality = {
          name: data[0]["nombre"],
          max: data[0]["prediccion"]["dia"][0]["temperatura"]["maxima"],
          min: data[0]["prediccion"]["dia"][0]["temperatura"]["minima"]
        };
        this.setState({ dataTemperature: temperaturesMunicipality, lenght: 1 });
      });
  };

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
  };


  render() {

    if (this.state.lenght > 0) {



      const apiName = this.state.dataTemperature.name;
      const name = options.filter(option => option.name === apiName);

      return (
        <div data-testid="home-page" className="main__homepage">

          <WeatherHome
            tempMax={this.state.dataTemperature.max}
            tempMin={this.state.dataTemperature.min}
            municipality={name[0].value}
            change={this.handleChange} />
        </div >
      );
    } else {

      return (
        <div className="weather-charge">
          <Load />
        </div>
      );
    }
  }
}

export default ApiWeather;

