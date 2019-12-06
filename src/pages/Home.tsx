import React from "react";
import Slider from "../containers/Slider/Slider";



class Home extends React.Component {

  render() {

    return (
      <div data-testid="home-page" className="main__homepage">
        <Slider />

      </div >
    );
  }


}

export default Home;
