import React, { FormEvent, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import firebase from "../../enviroments/enviroment";
import { Users } from "../../types";

//INICIALIZAR FIREBASE

export const Login = (props: RouteComponentProps) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //DATOS FIREBASE GUARDADOS EN FIREDATA:
  const [fireData, setFireData] = useState([] as Users[]);

  //LEER DATOS DE FIREBASE:
  useEffect(() => {
    const data = firebase
      .database()
      .ref("db")
      .child("users");

    data.on("value", snapshot => {
      setFireData(snapshot.val());
    });
  }, []);

  const submit = (event: FormEvent) => {
    event.preventDefault();

    const user = fireData
      .flat()
      .find(u => u.name === name && u.password === password);

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
