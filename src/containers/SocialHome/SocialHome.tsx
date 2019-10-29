import React from "react";
import image from "../../images/coffee.jpg";

const Social = () => {
  return (
    <div className="social">
      <div className="social__info-box">
        <h1 className="social__info-box-title">
          Únete a nuestra red Social de aventurer@s
        </h1>
        <div className="social__info-box-users">
          <p>Ya soy usuario:</p>
          <button>+</button>
          <p>Registrarme:</p>
          <button>+</button>
        </div>
      </div>

      <div className="social__img-box">
        <img src={image} />
      </div>
      <div className="social__login-box">
        <label> Usuario y contraseña</label>
        <form>
          <label>Usuario:</label>
          <input type="text"></input>
          <br />
          <label>Contraseña:</label>
          <input type="password"></input>
        </form>
      </div>
      <div className="social__form-box">
        <label> Registro</label>
        <form>
          <label>Nombre:</label>
          <input type="text"></input>
          <br />
          <label>Apellidos:</label>
          <input type="text"></input>
        </form>
      </div>
    </div>
  );
};

export default Social;
