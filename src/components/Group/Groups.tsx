import React, { useState } from "react";
import { Groups2 } from "../../types";
import Title from "../Reusable/Title";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import AddGroup from "./AddGroup";
import Group from "./Group";

type PropsCompGroups = {
  groups: Groups2;
  showAll: boolean;
}

const CompGroups2: React.FC<PropsCompGroups> = ({groups, showAll}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  let adventureName = "";
  //console.log(groups);

  const showAnyGroup = () => {
    let adventureNameArray = Object.keys(groups);
    let adventureNameCopy = adventureNameArray[0];
    //console.log("--", adventureNameCopy);
    let groupsCopy = groups[adventureNameCopy];
    //console.log("@@", groupsCopy);
    adventureName = " de " + adventureNameCopy;
    return Array.isArray(groupsCopy)
    ? groupsCopy.map(group => (<Group key={group.name} group={group} />))
    : (<p key="key">{groupsCopy}</p>)
  }

  const showAllGroups = () => {
    let adventureNames = Object.keys(groups);
    return adventureNames.map(adventureName => {
      let groupsCopy = groups[adventureName];
      return Array.isArray(groupsCopy) && groupsCopy.map(group => (<Group key={group.name} group={group} />));
    })
  }

  let showGroups = showAll ? showAllGroups() : showAnyGroup();

  return (
    <section>
      <Title title={`Grupos${adventureName}`} />
      <div className="grupos__container">
        {showGroups}
      </div>
      <ButtonRainbow text="Añadir grupo" changeState={() => setIsOpen(!isOpen)}/>
      {isOpen ? <AddGroup changeState={() => setIsOpen(!isOpen)}/> : ""}
    </section>
  );
}

export default CompGroups2;