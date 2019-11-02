import React from "react";


export const Form = () => {
  return (
    <div className="social__right-form">

      <form action="#" className="form">


        <input type="text" placeholder="Nombre y Apellidos" className="form-input" required />

        <input type="email" placeholder="E-mail" className="form-input" required />

        <input type="date" className="form-input" placeholder="Fecha de nacimiento" required></input>
        <input type="password" placeholder="Contraseña" className="form-input" />

        <span>Mujer</span><input type="radio" name="gender" value="mujer" />
        <span>Hombre</span> <input type="radio" name="gender" value="hombre" />
        <span>Otro</span><input type="radio" name="gender" value="otro" />

        <div className="form-submit">
          <input type="submit" value="Regístrate" />
        </div>

      </form>
    </div >
  )
}

export default Form;