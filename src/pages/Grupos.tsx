import React from "react";
import Title from "../components/Reusable/Title";
//import Grupo from "../components/Grupo";
import fetchGrupos from "../fake-data/groups";

console.log(fetchGrupos);
/*users[1].misgrupos.push("Pepe va al monte");
console.log(users[0].misgrupos);*/
//let grupos: string[] = ["Grupo1", "Grupo2", "Grupo3", "Grupo4"];

const Grupos = () => {
  return (
    <section>
      <Title title="Grupos" />
      <div className="grupos__container">
        {[].map.call(
          fetchGrupos.escalada,
          grupo => console.log("·····", grupo)
          //<Grupo name={grupo}></Grupo>
        )}
      </div>
    </section>
  );
};

export default Grupos;
