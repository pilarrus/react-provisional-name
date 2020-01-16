import { Groups, Group } from "../types";

const convertDegreesToThermalSensation = (degrees: number): string => {
  let thermalSensation;
  if (degrees <= 15) {
    thermalSensation = "cold";
  } else if (degrees > 15 && degrees < 30) {
    thermalSensation = "warmth";
  } else {
    thermalSensation = "very hot";
  }
  return thermalSensation;
};

const compareTo = (x: Group, y: Group) => {
  if (x.name_adventure < y.name_adventure) return -1;
  else if (x > y) return 1;
  return 0;
};

const sortByTypeAdventure = (groups: Groups) => {
  return groups.sort(compareTo);
};

const sortGroups = (sortBy: string, groups: Groups) => {
  switch (sortBy) {
    case "alphabetical":
      return groups.sort((x: Group, y: Group) => {
        if (x.name < y.name) return -1;
        else if (x > y) return 1;
        return 0;
      });
    case "latestDate":
      return groups.sort((x: Group, y: Group) => {
        if (x.timestamp < y.timestamp) return -1;
        else if (x > y) return 1;
        return 0;
      });
    case "typeAdventure":
      return groups.sort((x: Group, y: Group) => {
        if (x.name_adventure < y.name_adventure) return -1;
        else if (x > y) return 1;
        return 0;
      });
    default:
      return groups.sort((x: Group, y: Group) => {
        if (x.name < y.name) return -1;
        else if (x > y) return 1;
        return 0;
      });
  }
};

export {
  convertDegreesToThermalSensation,
  compareTo,
  sortByTypeAdventure,
  sortGroups
};
