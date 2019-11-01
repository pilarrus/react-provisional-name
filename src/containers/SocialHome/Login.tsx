import React from "react";

export const Login = () => {
  return (
    <div className="social__right-login">
      <label> Usuario y contraseña</label>
      <form>
        <label>Usuario:</label>
        <input type="text"></input>
        <br />
        <label>Contraseña:</label>
        <input type="password"></input>
        <input type="submit" value="Acceder" />
      </form>
    </div>
  )
}

export default Login;