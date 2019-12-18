import React, { FormEvent, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

export const Form = (props: RouteComponentProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [chargeData, setChargeData] = useState(false);
  //const [data, setData] = useState<string[]>([]);

  console.log("@@@@@@", props);

  useEffect(() => {
    if (status !== "" && gender !== "") {
      setChargeData(true);
    }
  }, [status, gender]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (chargeData) {
      props.history.push("/profile", {
        name,
        email,
        age,
        password,
        gender,
        status
      });
    }
  };

  return (
    <div className="social__right-form">
      <form action="#" className="form" onSubmit={submit}>
        <input
          type="text"
          placeholder="Nombre y Apellidos"
          className="form-input"
          name="name"
          onChange={e => setName(e.target.value.trim())}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          className="form-input"
          name="email"
          onChange={e => setEmail(e.target.value.trim())}
          required
        />
        <input
          type="number"
          min="18"
          max="80"
          className="form-input"
          placeholder="Edad"
          name="age"
          onChange={e => setAge(e.target.value.trim())}
          required
        ></input>

        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="form-input"
          onChange={e => setPassword(e.target.value.trim())}
          required
        />

        <div className="form-select">
          <select
            required
            name="gender"
            defaultValue={"Default"}
            onChange={e => setGender(e.target.value)}
          >
            <option value="Default" disabled>
              Género
            </option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
            <option value="other">Otro</option>
          </select>

          <select
            required
            name="status"
            defaultValue={"Default"}
            onChange={e => setStatus(e.target.value)}
          >
            <option value="Default" disabled>
              Nivel de aventurer@
            </option>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="professional">Profesional</option>
          </select>
        </div>

        <div className="form-submit">
          <input type="submit" name="submit" value="Regístrate" />
        </div>
      </form>
    </div>
  );
};

export default withRouter(Form);
