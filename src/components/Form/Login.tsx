import React, { FormEvent, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export const Login = (props: RouteComponentProps) => {
  console.log(props);
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    props.history.push("/profile", {
      name,
      password
    });
  };

  return (
    <div className="social__right-login">
      <form className="form" onSubmit={submit}>
        <input
          required
          type="text"
          placeholder="Nombre de usuario"
          className="form-input"
          onChange={e => setUsername(e.target.value.trim())}
        ></input>
        <input
          required
          type="password"
          placeholder="Contraseña"
          className="form-input"
          onChange={e => setPassword(e.target.value.trim())}
        ></input>
        <div className="form-submit">
          <input type="submit" value="Acceder" />
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
