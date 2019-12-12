import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Group from "../components/Group";
import Title from "../components/Reusable/Title";
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

/*adventures.map(adventure => {
  let groups = fetchGrupos[adventure];
  console.log(groups);
  /*if (Array.isArray(groups)) {
    groups.map(group => console.log(group.name));
  }*/
//});
//props.match.params.activity

const Grupos: React.FC<RouteComponentProps<{activity?: string}>> = RouteComponentProps => {
  let activity = RouteComponentProps.match.params.activity;
  console.log(activity);
  //console.log(">>>>", props.match.params.activity);

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

export default withRouter(Grupos);
