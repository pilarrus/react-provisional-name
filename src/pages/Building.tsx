import React from "react";
import build from "../images/build.jpg";
class Build extends React.Component {
  render() {
    const style = {
      width: "100%"
    };

    return (
      <div>
        <img src={build} style={style} className="construccion-img" />
        <p className="construccion-p">Página en construcción</p>
      </div>
    );
  }
}

export default Build;
