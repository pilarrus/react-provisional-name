import React from "react";

export const Login = () => {
  return (
    <div className="social__right-login">

      <form className="form">
        <input type="text" placeholder="Email" className="form-input"></input>
        <input type="password" placeholder="Contraseña" className="form-input"></input>
        <div className="form-submit">
          <input type="submit" value="Acceder" />
        </div>
      </form>
    </div>
  )
}

export default Login;