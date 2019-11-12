import React from "react";
import AdventuresContainer from "../containers/Adventures";
import SocialHome from "../containers/SocialHome";
import WeatherPrueba from "../containers/Weather/WPrueba";
import { convertDegreesToThermalSensation } from "../utils/functions";

const Home: React.FC = () => {
  // degrees cogerá el valor desde una API
  let degrees: number = 32;
  let thermalSensationAPI: string = convertDegreesToThermalSensation(degrees);
  //console.log("@@@", thermalSensationAPI);
  
  return (
    <div data-testid="home-page">
      <AdventuresContainer thermalSensationAPI={thermalSensationAPI} />
      <SocialHome />
      <WeatherPrueba />
    </div>
  );
};

export default Home;
