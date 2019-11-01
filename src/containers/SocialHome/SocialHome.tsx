import React from "react";
import Info from "./Info";
import Register from "./Register";

class SocialHome extends React.Component {

  state = {
    clickLogin: false,
    clickRegister: false
  }

  stateHandler = {


  };

  render() {

    return (
      <div className="social" >
        <Info />
        <Register />
      </div >
    )
  }
}

export default SocialHome;