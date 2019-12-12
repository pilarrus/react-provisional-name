import React from "react";
import Title from "../../components/Reusable/Title";
import Info from "./Info";
import Register from "./Register";

class SocialHome extends React.Component {
  state = {
    clickLogin: false
  };

  stateHandler = () => {
    this.setState({
      clickLogin: !this.state.clickLogin
    });
  };

  render() {
    return (
      <section className="social" data-testid="socialTest">
        <Title title="Red social" />
        <div className="social__box">
          <div className="social__box-container">
            <Info
              changeState={this.stateHandler}
              login={this.state.clickLogin}
            />
            <Register login={this.state.clickLogin} />
          </div>
        </div>
      </section>
    );
  }
}

export default SocialHome;
