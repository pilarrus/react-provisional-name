import React from "react";
import Title from "../components/Reusable/Title";
//import users from "../fake-data/usersRegisters";



/*users[1].misgrupos.push("Pepe va al monte");
console.log(users[0].misgrupos);*/
let grupos: string[] = ["Grupo1", "Grupo2", "Grupo3", "Grupo4"];

const Grupos = () => {
  return (
    <section>
      <Title title="Grupos" />
      <div>
        {grupos.map(grupo => (
          <div>{grupo}</div>
        ))}
      </div>
    </section>
  );
};

export default Grupos;
