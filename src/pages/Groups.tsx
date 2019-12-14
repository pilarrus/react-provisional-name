import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import Group from "../components/Group";
import Title from "../components/Reusable/Title";
import fetchGrupos from "../fake-data/groups";

let adventuresID = Object.keys(fetchGrupos);
//console.log(adventuresID);
/*console.log(
  adventuresID.map(adventureID => {
    let groups = fetchGrupos[adventureID].groups;
    if (Array.isArray(groups)) {
      groups.map(group => console.log(group.name));
    }
  })
);*/

const Grupos: React.FC<RouteComponentProps<{
  activityID?: string;
}>> = RouteComponentProps => {
  let params = RouteComponentProps.match.params;
  //console.log(params);
  if (Object.keys(params).length === 0) {
    console.log(RouteComponentProps);
    return (
      <section>
        <Title title="Grupos" />
        <div className="grupos__container">
          {adventuresID.map(adventureID => {
            let groups = fetchGrupos[adventureID].groups;
            //console.log(groups);
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
  } else {
    let activityID = RouteComponentProps.match.params.activityID;
    //console.log(activityID);
    return (
      <section>
        <Title title="Grupos" />
        <div className="grupos__container">
          {adventuresID.map(adventureID => {
            if (adventureID === activityID) {
              console.log(activityID);
              console.log(adventureID);
              let groups = fetchGrupos[adventureID].groups;
              //console.log(groups);
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
                return (
                <div key="key">
                  <p>{groups}</p>
                  <button type="submit">Crear grupo</button>
                </div>
                );
              }
            } else {
              return [];
            }
          })}
        </div>
      </section>
    );
    /*adventuresID.map(adventureID => {
      if(adventureID === activityID) {
        console.log(activityID);
        console.log(adventureID);
      }
    });*/
  }

  /*return (
    <section>
      <Title title="Grupos" />
      <div className="grupos__container">
        {adventuresID.map(adventureID => {
          let groups = fetchGrupos[adventureID].groups;
          //console.log(groups);
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
  );*/
};

export default withRouter(Grupos);
