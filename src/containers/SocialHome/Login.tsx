import React from "react";
import { Animated } from "react-animated-css";

export const Login = () => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="flash"
      animationInDuration={2000}
      isVisible={true}
    >
      <div className="social__right-login">
        <form className="form">
          <input type="text" placeholder="Email" className="form-input"></input>
          <input
            type="password"
            placeholder="Contraseña"
            className="form-input"
          ></input>
          <div className="form-submit">
            <input type="submit" value="Acceder" />
          </div>
        </form>
      </div>
    </Animated>
  );
};

export default Login;
