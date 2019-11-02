import React from "react";


export const Form = () => {
  return (
    <div className="social__right-form">
      <form>
        <h2>Únete</h2>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <input type="email" placeholder="E-mail" />
        <div>Fecha de nacimiento</div>
        <input type="date"></input>
        <input type="password" placeholder="Contraseña" />
        <div>Género</div>
        <span><input type="radio" name="gender" /><label>Mujer</label></span>
        <span><input type="radio" name="gender" /><label>Hombre</label></span>
        <span><input type="radio" name="gender" /><label>Otro</label></span>
        <br />
        <input type="submit" value="Regístrate" />
      </form>
    </div>
  )
}

export default Form;