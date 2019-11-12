import React from "react";
import AdventuresContainer from "../containers/Adventures";
import SocialHome from "../containers/SocialHome";
import WeatherPrueba from "../containers/Weather/WPrueba";

const Home: React.FC = () => {
  return (
    <div data-testid="home-page">
      <AdventuresContainer />
      <SocialHome />
      <WeatherPrueba />
    </div>
  );
};

export default Home;
