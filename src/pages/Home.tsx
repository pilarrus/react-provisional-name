import React from "react";
import SocialHome from "../containers/SocialHome";

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

class Home extends React.Component {
  state = {
    dataTemperature: {} as dataTemperatureType,
    selectedOption: madrid,
    lenght: 0
  };

  render() {
    return (
      <div data-testid="home-page">
        <SocialHome />
      </div>
    );
  }
}

export default Home;
