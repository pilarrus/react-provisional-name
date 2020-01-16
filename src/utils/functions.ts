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
  let sortedGroups: Groups = groups.sort(compareTo);
  return sortedGroups;
};

export { convertDegreesToThermalSensation, compareTo, sortByTypeAdventure };
