import React from "react";


export const Form = () => {
  return (
    <div className="social__right-form">

      <form action="#" className="form">

        <input type="text" placeholder="Nombre y Apellidos" className="form-input" required />
        <input type="email" placeholder="E-mail" className="form-input" required />
        <input type="date" className="form-input" placeholder="Fecha de nacimiento" required></input>
        <input type="password" placeholder="Contraseña" className="form-input" />

        <div className="form-select">

          <select name="select" defaultValue={'Default'}  >
            <option value="Default" disabled >Género</option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
            <option value="other">Otro</option>
          </select>

          <select name="select" defaultValue={'Default'}>
            <option value="Default" disabled >Nivel de aventurer@</option>
            <option value="beginner">Principiante</option>
            <option value="intermediate">Intermedio</option>
            <option value="professional">Profesional</option>
          </select>

        </div>

        <div className="form-submit">
          <input type="submit" value="Regístrate" />
        </div>

      </form>
    </div >
  )
}

export default Form;