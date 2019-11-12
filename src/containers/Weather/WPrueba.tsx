import React from "react";
import Select from "react-select";
import config from "../../config";
import madridMun from "./municipality_codes";
import WeatherMunicipality from "./WeatherMunicipality";

const options = madridMun;

const madrid = {
  codpro: "28",
  codmun: "079",
  label: "Madrid",
  value: "Madrid"
};

class WeatherHome extends React.Component {
  state = {
    loading: false,
    dataTemperature: [],
    selectedOption: madrid
  };

  componentDidMount() {
    this.handleapi(
      this.state.selectedOption.codpro + this.state.selectedOption.codmun
    );
  }

  componentDidUpdate(_: {}, prevState: any) {
    if (this.state.selectedOption.codpro + this.state.selectedOption.codmun != prevState.selectedOption.codpro + prevState.selectedOption.codmun) {
      this.handleapi(
        this.state.selectedOption.codpro + this.state.selectedOption.codmun
      );
    }

  }

  handleapi = (selectedOption: string) => {
    console.log(">>>>>>> DENTRO DE HANDLEAPI", selectedOption);
    fetch(
      `${config.aemet.urltemperature}/${selectedOption}?api_key=${config.aemet.apiKey}`
    )
      .then(response => response.json())
      .then(response => fetch(response.datos).then(response => {
        return response.json()
      }))
      .then(data => {

        this.setState({ loading: true, dataTemperature: data })
      });
  };

  handleChange = (selectedOption: any) => {
    console.log(">>>TYPEOF DENTRO DE HANDLECHANGE", typeof selectedOption);
    this.setState({ selectedOption });
    console.log("Ha seleccionado: ", selectedOption);
  };

  render() {
    if (this.state.dataTemperature.length > 0) {
      const value = null;

      //console.log(">>>> SELECTEDOPTION DEL STATE", selectedOption);
      //console.log("TYPEOF SELECTEDOPTION", typeof selectedOption);
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
                value={value}
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

// JAVIER:

//¿por qué al poner el tipo string en handlechange que son object y
// cómo usar bien el componentdidupdate con prevprops y prevstate

/*type MunProps = {
  codpro: string;
  codmun: string;
  label: string;
  value: string;
};*/
