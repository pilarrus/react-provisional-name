import React, { FormEvent, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import dataUsers from "../../fake-data/usersRegisters";

export const Login = (props: RouteComponentProps) => {
  //console.log(props);
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();

    const user = dataUsers.find(
      u => u.name === name && u.password === password
    );

    if (user) {
      props.history.push("/profile", user);
    } else {
      setMessage("Introduce los datos correctos");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="social__right-login">
      {message ? <h1> {message}</h1> : null}
      <form className="form" onSubmit={submit}>
        <input
          value={name}
          required
          type="text"
          placeholder="Usuario"
          className="form-input"
          onChange={e => setUsername(e.target.value.trim())}
        ></input>
        <input
          value={password}
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
