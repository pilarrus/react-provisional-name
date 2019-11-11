import React from "react";
import config from "../../config";

const mountainArea = "mad2";

class WeatherMountain extends React.Component {
  state = {
    loading: false,
    dataMountain: []
  };

  componentDidMount() {

    fetch(`${config.aemet.urlmountain}/${mountainArea}?api_key=${config.aemet.apiKey}`)
      .then(response => response.json())
      .then(response => fetch(response.datos)
        .then(response => response.json()))
      .then(data => this.setState({ dataMountain: data }));

  }

  componentDidUpdate() {
    console.log(this.state.dataMountain);
  }


  render() {
    return <div className="weather">Montaña!</div>;
  }
}

export default WeatherMountain;