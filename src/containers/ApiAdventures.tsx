import React from "react";
import Load from "../components/Reusable/Loading";
import config from "../config";
import { convertDegreesToThermalSensation } from "../utils/functions";
import AdventuresContainer from "./Adventures";

type Code = {
  codpro: string;
  codmun: string;
};

type dataTemperatureType = {
  name: string;
  max: number;
  min: number;
};

const madrid: Code = {
  codpro: "28",
  codmun: "079"
};

class ApiAdventures extends React.Component {
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
      let degree = this.state.dataTemperature.max;
      let thermalSensationAPI: string = convertDegreesToThermalSensation(
        degree
      );
      return (
        <div data-testid="home-page" className="main__homepage">
          <AdventuresContainer thermalSensationAPI={thermalSensationAPI} />
        </div>
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

export default ApiAdventures;
