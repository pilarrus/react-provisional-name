import React from "react";
import Form from "./Form";
import Login from "./Login";

const Register: React.FC<{ login: boolean }> = ({ login }) => (
  <div className="social__right">{login ? <Login /> : <Form />}</div>
);

export default Register;
