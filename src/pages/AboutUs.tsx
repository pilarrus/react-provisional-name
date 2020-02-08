import React from "react";
import Title from "../components/Reusable/Title";
import icon from "../images/icons/sprite.svg";

const AboutUs: React.FC = () => {
  return (
    <section className="aboutUs">
      <Title title="Sobre nosotros" />
      <div className="aboutUs__container">
        <div className="aboutUs__container--box">
        <p>Somos tres estudiantes de DAW: Elisa, Sergio y Pilar.</p>
        <p>
          Hemos diseñado y desarrollado esta aplicación web para que los más
          aventureros vivan divertidas actividades en la naturaleza a lo largo
          de toda la Comunidad de Madrid.
        </p>
        <p>
          Los aventureros que estén registrados podrán apuntarse a los grupos
          que les apetezca, o crear nuevos grupos para realizar la actividad que
          elijan, en el día, lugar y hora que se indica en compañia de otros
          aventureros.
        </p>
        <p>
          Podrás hacerte amigo de otros usuarios de la aplicación. Y desde tu
          perfil verás los grupos a los que te has apuntado. Además, en función
          del tiempo de Madrid, te saldrán sugerencias de actividades.
        </p>
        <p>
          Esperamos que os guste y en especial a nuestro maestro y aventurero
          estrella Javier, que gracias a sus conocimientos y ayuda existe
          "Provisional name". Seguro que sabrá valorar nuestro esfuerzo y
          aprendizaje y acabará poniéndonos:
        </p>
        <span className="star">
            <svg className="star__icon">
              <use xlinkHref={icon + `#icon-star-full`}></use>
            </svg>
            <svg className="star__icon">
              <use xlinkHref={icon + `#icon-star-full`}></use>
            </svg>
            <svg className="star__icon">
              <use xlinkHref={icon + `#icon-star-full`}></use>
            </svg>
            <svg className="star__icon">
              <use xlinkHref={icon + `#icon-star-full`}></use>
            </svg>
            <svg className="star__icon">
              <use xlinkHref={icon + `#icon-star-full`}></use>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
