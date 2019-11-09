import React from "react";
import WeatherHome from "../containers/Weather/WeatherHome";

const Home: React.FC = () => {
  return (
    <div data-testid="home-page">
      {
        //<AdventuresContainer />
        // <SocialHome />
      }
      <WeatherHome />
    </div>
  );
};

export default Home;
