import React from "react";
import AdventuresContainer from "../containers/Adventures";
import SocialHome from "../containers/SocialHome";

const Home: React.FC = () => {
  return (
    <div data-testid="home-page">
      <AdventuresContainer />
      <SocialHome />
    </div>
  );
};

export default Home;
