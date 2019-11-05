import React from "react";
//import Adventures from "../components/Adventures";
import AdventuresContainer from "../containers/Adventures";
import SocialHome from "../containers/SocialHome";

const Home: React.FC = () => {
  return (
    <div>
      <AdventuresContainer />
      <SocialHome />
    </div>
  );
};

export default Home;
