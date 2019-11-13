import React from "react";
import AdventuresContainer from "../containers/Adventures";
import SocialHome from "../containers/SocialHome";
import WeatherPrueba from "../containers/Weather/WPrueba";
import { convertDegreesToThermalSensation } from "../utils/functions";

//import Select from "react-select";
import config from "../config";
//import madridMun from "./municipality_codes";

//const options = madridMun;

const madrid = {
  codpro: "28",
  codmun: "079"
};

class Home extends React.Component {
  state = {
    dataTemperature: [],
    selectedOption: madrid
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
        //console.log(data[0]);
        let temperaturesMunicipality = {
          name: data[0].nombre,
          max: data[0]["prediccion"]["dia"][0]["temperatura"]["maxima"],
          min: data[0]["prediccion"]["dia"][0]["temperatura"]["minima"],
        };
        console.log(temperaturesMunicipality);
        this.setState({ dataTemperature: data });
      });
      
  };

  render() {
    if (this.state.dataTemperature.length > 0) {
      let degrees: number = this.state.dataTemperature[0]["prediccion"]["dia"][0]["temperatura"]["maxima"];
      console.log("maxDegrees", degrees);
      let thermalSensationAPI: string = convertDegreesToThermalSensation(degrees);
      //console.log("thermalSensation", thermalSensationAPI);
      
      return (
        <div data-testid="home-page">
          <AdventuresContainer thermalSensationAPI={thermalSensationAPI} />
          <SocialHome />
          <WeatherPrueba />
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
};

export default Home;