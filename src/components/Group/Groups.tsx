import React, { useState } from "react";
import { Groups2 } from "../../types";
import Title from "../Reusable/Title";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import AddGroup from "./AddGroup";
import Group from "./Group";

type PropsCompGroups = {
  groups: Groups2;
  showAll: boolean;
  setSortBy: (sortBy: string) => void;
};

const Groups: React.FC<PropsCompGroups> = ({ groups, showAll, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("groups>>>",groups);

  let adventureName = "";

  const showAnyGroup = () => {
    let adventureNameArray = Object.keys(groups);
    let adventureNameCopy = adventureNameArray[0];
    let groupsCopy = groups[adventureNameCopy];
    adventureName = " de " + adventureNameCopy;
    return Array.isArray(groupsCopy) ? (
      groupsCopy.map(group => (
        <Group
          key={group.name}
          group={group}
          adventureName={adventureName.replace(" de ", "")}
        />
      ))
    ) : (
      <p key="key">{groupsCopy}</p>
    );
  };

  const showAllGroups = () => {
    let adventureNames = Object.keys(groups);
    return adventureNames.map(adventureName => {
      let groupsCopy = groups[adventureName];
      return (
        Array.isArray(groupsCopy) && groupsCopy.map(group => (
              <Group
                key={group.name}
                group={group}
                adventureName={adventureName}
              />
            )
        )
      );
    });
  };

  let showGroups = showAll ? showAllGroups() : showAnyGroup();

  return (
    <section className="groups">
      <Title title={`Grupos${adventureName}`} />
      <select name="" id="" defaultValue="Default" onChange={e => setSortBy(e.target.value)}>
        <option value="Default" disabled>Ordenar por</option>
        <option value="alphabetical">Orden alfabético</option>
        <option value="latestDate">Fecha más reciente</option>
        <option value="typeAdventure">Tipo de aventura</option>
      </select>
      <div className="groups__container">
        <div className="groups__container--box">{showGroups}</div>
        <ButtonRainbow
          text="Añadir grupo"
          changeState={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen ? <AddGroup changeState={() => setIsOpen(!isOpen)} /> : ""}
    </section>
  );
};

export default Groups;
