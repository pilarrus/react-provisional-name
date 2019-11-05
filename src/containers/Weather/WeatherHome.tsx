import React from "react";

class WeatherHome extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const url =
      "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28022?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbGlzYWdjdWJlcm9AZ21haWwuY29tIiwianRpIjoiNDk4YjQ0M2QtOGI1YS00NGRiLTkwZjAtMDBjZjEzZTQ2MTgzIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NzI4OTc1NjgsInVzZXJJZCI6IjQ5OGI0NDNkLThiNWEtNDRkYi05MGYwLTAwY2YxM2U0NjE4MyIsInJvbGUiOiIifQ.KrdD3zhTh2V6mHwgIv4WUKOqT1akysqmf-nTfxuK9nY";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.datos);
  }

  render() {
    return <div className="weather">soy weather</div>;
  }
}

export default WeatherHome;
