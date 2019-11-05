import React from "react";
import Info from "./Info";
import Register from "./Register";

class SocialHome extends React.Component {

  state = {
    clickLogin: false
  }

  stateHandler = () => {
    this.setState({
      clickLogin: !this.state.clickLogin
    });
  };

  render() {

    return (
      <div className="social" >
        <h1>Red social</h1>
        <div className="social__box">
          <div className="social__box-container">
            <Info changeState={this.stateHandler} login={this.state.clickLogin} />
            <Register login={this.state.clickLogin} />
          </div>
        </div>
      </div >
    )
  }
}

export default SocialHome;