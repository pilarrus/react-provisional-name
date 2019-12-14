import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Group from "../components/Group";
import Title from "../components/Reusable/Title";
import fetchGrupos from "../fake-data/groups";

let adventures = Object.keys(fetchGrupos);
console.log(adventures);
/*console.log(
  adventures.map(adventure => {
    let groups = fetchGrupos[adventure];
    if (Array.isArray(groups)) {
      groups.map(group => console.log(group.name));
    }
  })
);*/

const Grupos: React.FC<RouteComponentProps<{activity?: string}>> = RouteComponentProps => {
  let params = RouteComponentProps.match.params;
  if(Object.keys(params).length === 0) {
    console.log(RouteComponentProps);
  } else {
    let activity = RouteComponentProps.match.params.activity;
    console.log(activity);
    /*adventures.map(adventure => {
      if(adventure === activity) {
        console.log(activity);
        console.log(adventure)
      }
    });*/
  }

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
