import React, { useState } from "react";
import { Groups2 } from "../../types";
import Title from "../Reusable/Title";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import AddGroup from "./AddGroup";
import Group from "./Group";

type PropsCompGroups = {
  groups: Groups2;
  showAll: boolean;
};

const Groups: React.FC<PropsCompGroups> = ({ groups, showAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  let adventureName = "";

  const showAnyGroup = () => {
    let adventureNameArray = Object.keys(groups);
    let adventureNameCopy = adventureNameArray[0];
    let groupsCopy = groups[adventureNameCopy];
    adventureName = " de " + adventureNameCopy;
    return Array.isArray(groupsCopy)
    ? (groupsCopy.map(group => <Group key={group.name} group={group} />))
    : (<p key="key">{groupsCopy}</p>);
  };

  const showAllGroups = () => {
    let adventureNames = Object.keys(groups);
    return adventureNames.map(adventureName => {
      let groupsCopy = groups[adventureName];
      return (
        Array.isArray(groupsCopy) && (
          <div key={adventureName}>
            <p>{adventureName}</p>
            <div className="groups__container--box">
            {groupsCopy.map(group => (
              <Group key={group.name} group={group} />
            ))}
            </div>
          </div>
        )
      );
    });
  };

  let showGroups = showAll ? showAllGroups() : showAnyGroup();

  return (
    <section className="groups">
      <Title title={`Grupos${adventureName}`} />
      <div className="groups__container">{showGroups}</div>
      <ButtonRainbow
        text="Añadir grupo"
        changeState={() => setIsOpen(!isOpen)}
      />
      {isOpen ? <AddGroup changeState={() => setIsOpen(!isOpen)} /> : ""}
    </section>
  );
};

export default Groups;
