import React from "react";
import Form from "./Form";
import Login from "./Login";

const Register: React.FC<{ login: boolean }> = ({ login }) => (
  <div className="social__right">{login ? <Form /> : <Login />}</div>
);

export default Register;
