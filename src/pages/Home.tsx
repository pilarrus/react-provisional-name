import React from "react";
import config from "../config";
import AdventuresContainer from "../containers/Adventures";
import SocialHome from "../containers/SocialHome";
import madridMun from "../containers/Weather/municipality_codes";
import WeatherHome from "../containers/Weather/WeatherHome";
import { convertDegreesToThermalSensation } from "../utils/functions";

type dataTemperatureType = {
  name: string;
  max: number;
  min: number;
};

const options = madridMun;

const madrid = {
  codpro: "28",
  codmun: "079"
};

class Home extends React.Component {
  state = {
    dataTemperature: {} as dataTemperatureType,
    selectedOption: madrid,
    lenght: 0
  };

  componentDidMount() {
    this.handleapi(
      this.state.selectedOption.codpro + this.state.selectedOption.codmun
    );
  }

  componentDidUpdate(_: {}, prevState: any) {
    if (
      this.state.selectedOption.codpro + this.state.selectedOption.codmun !==
      prevState.selectedOption.codpro + prevState.selectedOption.codmun
    ) {
      this.handleapi(
        this.state.selectedOption.codpro + this.state.selectedOption.codmun
      );
    }
  }

  handleapi = (selectedOption: string) => {
    fetch(
      `${config.aemet.urltemperature}/${selectedOption}?api_key=${config.aemet.apiKey}`
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
      let degree = this.state.dataTemperature.max;
      let thermalSensationAPI: string = convertDegreesToThermalSensation(
        degree
      );
      const apiName = this.state.dataTemperature.name;
      const name = options.filter(option => option.name === apiName);

      return (
        <div data-testid="home-page">
          <AdventuresContainer thermalSensationAPI={thermalSensationAPI} />
          <SocialHome />
          <WeatherHome
            tempMax={this.state.dataTemperature.max}
            tempMin={this.state.dataTemperature.min}
            municipality={name[0].value}
            handlerState={this.handleChange}
          />
        </div>
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

export default Home;
