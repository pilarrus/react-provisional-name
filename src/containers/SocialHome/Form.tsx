import React from "react";


export const Form = () => {
  return (
    <div className="social__right-form">
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <input type="email" />
        <div>Fecha de nacimiento</div>
        <input type="date"></input>
        <input type="password" placeholder="Contraseña" />
        <div>Género</div>
        <span><input type="radio" name="gender" /><label>Mujer</label></span>
        <span><input type="radio" name="gender" /><label>Hombre</label></span>
        <span><input type="radio" name="gender" /><label>Otro</label></span>
        <input type="submit" value="Registro" />
      </form>
    </div>
  )
}

export default Form;