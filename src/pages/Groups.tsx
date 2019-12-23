import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import AddGroup from "../components/Group/AddGroup";
import Group from "../components/Group/Group";
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
            return Array.isArray(groups)
            ? groups.map(group => (<Group key={group.name} group={group} />))
            : []
          })}
        </div>
        <ButtonRainbow text="Añadir grupo" changeState={() => setIsOpen(!isOpen)}/>
        {isOpen ? <AddGroup changeState={() => setIsOpen(!isOpen)}/> : ""}
      </section>
    );
  } else {
    let activityID = RouteComponentProps.match.params.activityID;
    //console.log(activityID);
    let idFound = adventuresID.find(adventureID => adventureID === activityID);
    //console.log("id-->>>", idFound);
    //@ts-ignore
    let groups = fetchGrupos[idFound].groups;
    //console.log(groups);
    return (
      <section>
        <Title title="Grupos" />
        <div className="grupos__container">
          { Array.isArray(groups)
            ? groups.map(group => (<Group key={group.name} group={group} />))
            : (<p key="key">{groups}</p>)
          }
        </div>
        <ButtonRainbow text="Añadir grupo" changeState={() => setIsOpen(!isOpen)}/>
        {isOpen && <AddGroup changeState={() => setIsOpen(!isOpen)}/>}
      </section>
    );
  }
};

export default withRouter(Grupos);
