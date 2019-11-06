import React from "react";
import config from "../../config";

const postalCode = "28022";

class WeatherHome extends React.Component {
  state = {
    loading: true,
    data: []
  };
  //https://github.com/paroar/React_group/blob/containers/src/containers/Catalogue.tsx
  async componentDidMount() {
    console.log(">>>>>>", process.env)

    // fichero config.ts
    const url = `${config.aemet.url}/${postalCode}?api_key=${config.aemet.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const url2 = data.datos;
    const response2 = await fetch(url2);
    const data2 = await response2.json();

    console.log(data2);
  }

  render() {
    return <div className="weather"></div>;
  }
}

export default WeatherHome;
