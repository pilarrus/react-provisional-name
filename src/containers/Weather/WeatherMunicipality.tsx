import React from "react";
import nieve from "../../images/weather/nevando.svg";
import nube from "../../images/weather/nube.svg";
import sol from "../../images/weather/tiempo.svg";

const style = {
  width: "50px",
  height: "50px",
  marginTop: "10px"

};
const WeatherMunicipality: React.FC<{
  tempMax: number;
  tempMin: number;
  municipality: string;
}> = ({ tempMax, tempMin, municipality }) => (
  <div className="weather">
    <p className="weather__p"> El tiempo en {municipality}</p>
    <div className="weather__content">
      <div className="weather__content-temp">
        <p>
          Máxima <span>{tempMax}°C</span>
          <i>
            {tempMax <= 7 ? (
              <img src={nieve} style={style} alt="img" />
            ) : tempMax <= 15 ? (
              <img src={nube} style={style} alt="img" />
            ) : (
                  <img src={sol} style={style} alt="img" />
                )}
          </i>
        </p>
      </div>
      <div className="weather__content-temp">
        <p>
          Mínima <span>{tempMin}°C</span>
          <i>
            {tempMin <= 7 ? (
              <img src={nieve} style={style} alt="img" />
            ) : tempMin <= 15 ? (
              <img src={nube} style={style} alt="img" />
            ) : (
                  <img src={sol} style={style} alt="img" />
                )}
          </i>
        </p>
      </div>
    </div>
  </div>
);

export default WeatherMunicipality;
