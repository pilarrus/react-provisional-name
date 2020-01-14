import React, { useState } from "react";
import { Groups2 } from "../../types";
import Title from "../Reusable/Title";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import AddGroup from "./AddGroup";
import Group from "./Group";
//import groups from "../../fake-data/groups";

type PropsCompGroups = {
  groups: Groups2;
  showAll: boolean;
};

const sorted = (x: string, y: string) => {
  if(x < y) return -1;
  else if (x > y) return 1;
  return 0;
}

const Groups: React.FC<PropsCompGroups> = ({ groups, showAll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState("alphabetical");
  console.log("sort>>",sort);
  console.log("groups>>>",groups);

  const sortByTypeAdventure = (groups: Groups2) => {
    let keys = Object.keys(groups);
    return keys.sort(sorted);
  }
  console.log(">>>>", sortByTypeAdventure(groups));

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
      <select name="" id="" defaultValue="Default" onChange={e => setSort(e.target.value)}>
        <option value="Default" disabled>Ordena por</option>
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
