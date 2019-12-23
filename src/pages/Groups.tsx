import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import AddGroup from "../components/AddGroup";
import Group from "../components/Group";
import ButtonRainbow from "../components/Reusable/ButtonRainbow";
import Title from "../components/Reusable/Title";
import fetchGrupos from "../fake-data/groups";

let adventuresID = Object.keys(fetchGrupos);

const Grupos: React.FC<RouteComponentProps<{
  activityID?: string;
}>> = RouteComponentProps => {
  const [isOpen, setIsOpen] = useState(false);

  let params = RouteComponentProps.match.params;
  //console.log(params);
  if (Object.keys(params).length === 0) {
    //console.log(RouteComponentProps);
    return (
      <section>
        <Title title="Grupos" />
        <div className="grupos__container">
          {adventuresID.map(adventureID => {
            //let adventure = fetchGrupos[adventureID].adventure;
            let groups = fetchGrupos[adventureID].groups;
            //console.log(groups);
            //console.log(adventure);
            if (Array.isArray(groups)) {
              return groups.map(group => (
                <Group key={group.name} group={group} />
              ));
            } else {
              return [];
            }
          })}
        </div>
        <ButtonRainbow text="Añadir grupo" changeState={() => setIsOpen(!isOpen)}/>
        {isOpen ? <AddGroup changeState={() => setIsOpen(!isOpen)}/> : ""}
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
              //console.log(activityID);
              //console.log(adventureID);
              let groups = fetchGrupos[adventureID].groups;
              //console.log(groups);
              if (Array.isArray(groups)) {
                return groups.map(group => (
                  <Group key={group.name} group={group} />
                ));
              } else {
                return (
                  <div key="key">
                    <p>{groups}</p>
                  </div>
                );
              }
            } else {
              return [];
            }
          })}
        </div>
        <ButtonRainbow text="Añadir grupo" changeState={() => setIsOpen(!isOpen)}/>
        {isOpen && <AddGroup changeState={() => setIsOpen(!isOpen)}/>}
      </section>
    );
  }
};

export default withRouter(Grupos);
