import React, { useState } from "react";
import Title from "../components/Reusable/Title";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  console.log("name", name);
  console.log("email", email);
  console.log("msg", msg);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert("Se envió correctamente");
    e.preventDefault();
  };

  return (
    <section className="contact">
      <Title title="Contacto" />
      <div className="contact__container">
        <div className="contact__container--location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.9350601159413!2d-3.8598298850649178!3d40.4767016599146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd41846582414961%3A0xb7de74e24489f270!2sInstituto%20de%20Formaci%C3%B3n%20Profesional%20Mar%C3%ADa%20de%20Zayas%20y%20Sotomayor!5e0!3m2!1ses!2ses!4v1581190728292!5m2!1ses!2ses"
            width="400"
            height="450"
            frameBorder="0"
            style={{ border: 0, borderRadius: "2px" }}
            allowFullScreen={false}
            title="myFrame"
          ></iframe>
        </div>

        <div className="contact__container--box">
          <form
            action=""
            className="contact__container--box-form"
            onSubmit={() => handleSubmit}
          >
            <input
              type="text"
              placeholder="Nombre"
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
            <textarea
              placeholder="Escríbenos tus sugerencias"
              className="form-input"
              name="msg"
              onChange={e => setMsg(e.target.value.trim())}
              cols={30}
              rows={10}
              required
            ></textarea>
            <br />
            <button className="adventures__btn">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
