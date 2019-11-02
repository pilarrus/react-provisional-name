import React from "react";
import Info from "./Info";
import Register from "./Register";

class SocialHome extends React.Component {

  state = {
    clickLogin: false,
    clickRegister: true
  }

  stateHandler = {


  };

  render() {

    return (
      <div className="social" >

        <h1>Red social</h1>
        <div className="social__box">
          <div className="social__box-info-register">
            <Info />
            <Register />
          </div>
        </div>
      </div >
    )
  }
}

export default SocialHome;