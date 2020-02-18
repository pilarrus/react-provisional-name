import React, { useState } from "react";
import { Groups } from "../../types";
import ButtonRainbow from "../Reusable/ButtonRainbow";
import SelectOrder from "../Reusable/SelectOrder";
import Title from "../Reusable/Title";
import AddGroup from "./AddGroup";
import Group from "./Group";

type GroupsProps = {
  groups: Groups;
  showAll: boolean;
  setSortBy: (sortBy: string) => void;
  adventureName?: string;
};

const GroupsComponent: React.FC<GroupsProps> = ({
  groups,
  showAll,
  setSortBy,
  adventureName
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let adventureNameCopy = "";
  let sortOptions = [
    ["alphabetical", "Orden alfabético"],
    ["latestDate", "Fecha más reciente"],
    ["typeAdventure", "Tipo de aventura"]
  ];

  const showNoGroup = () => <p>Aún no hay grupos, crea uno</p>;

  const showAnyGroup = () => {
    sortOptions = [
      ["alphabetical", "Orden alfabético"],
      ["latestDate", "Fecha más reciente"]
    ];
    adventureNameCopy = " de " + adventureName;
    if (groups.length !== 0) {
      return groups.map(group => <Group key={group.name} group={group} />);
    } else {
      return showNoGroup();
    }
  };

  const showAllGroups = () => {
    return groups.map(group => <Group key={group.name} group={group} />);
  };

  let showGroups = showAll ? showAllGroups() : showAnyGroup();

  return (
    <section className="groups">
      <Title title={`Grupos${adventureNameCopy}`} />

      <div className="groups__container">
        {groups.length >= 2 && (
          <SelectOrder options={sortOptions} setSortBy={setSortBy} />
        )}
        <div className="groups__container--box">{showGroups}</div>
        <ButtonRainbow
          text="Añadir grupo"
          changeState={() => setIsOpen(!isOpen)}
          disabled={false}
        />
      </div>
      {isOpen ? (
        typeof adventureName !== "undefined" ? (
          <AddGroup
            viewMore={() => setIsOpen(!isOpen)}
            adventureName={adventureName}
          />
        ) : (
          <AddGroup viewMore={() => setIsOpen(!isOpen)} />
        )
      ) : (
        ""
      )}
    </section>
  );
};

export default GroupsComponent;
