import React from "react";
import Title from "../components/Reusable/Title";
import Group from "../components/Group";
import fetchGrupos from "../fake-data/groups";

let adventures = Object.keys(fetchGrupos);

/*console.log(
  adventures.map(adventure => {
    let groups = fetchGrupos[adventure];
    if (Array.isArray(groups)) {
      groups.map(group => console.log(group.name));
    }
  })
);*/

const Grupos: React.FC = () => {
  return (
    <section>
      <Title title="Grupos" />
      <div className="grupos__container">
        {adventures.map(adventure => {
          let groups = fetchGrupos[adventure];
          if (Array.isArray(groups)) {
            return groups.map(group => (
              <Group
                key={group.name}
                name={group.name}
                place={group.place}
                //date={JSON.stringify(group.date)}
                timestamp={group.timestamp}
              />
            ));
          } else {
            return [];
          }
        })}
      </div>
    </section>
  );
};

export default Grupos;
