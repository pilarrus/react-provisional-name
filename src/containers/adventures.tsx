import React from "react";
import Adventure from "./adventure";

const Adventures = () => {
  return (
    <section>
      <div>
        <h2>Nuestras aventuras</h2>
      </div>
      <div>
        <Adventure/>
        <Adventure/>
        <Adventure/>
      </div>
      <button>Ver más aventuras</button>
    </section>
  );
};

export default Adventures;
