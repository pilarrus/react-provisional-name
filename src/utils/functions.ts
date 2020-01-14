import { Groups2 } from "../types";

const convertDegreesToThermalSensation = (degrees: number): string => {
  let thermalSensation;
  if(degrees <= 15) {
    thermalSensation = "cold";
  } else if (degrees > 15 && degrees <30) {
    thermalSensation = "warmth";
  } else {
    thermalSensation = "very hot";
  }
  return thermalSensation;
};

const sorted = (x: string, y: string) => {
  if(x < y) return -1;
  else if (x > y) return 1;
  return 0;
}

const sortByTypeAdventure = (groups: Groups2) => {
  let keys = Object.keys(groups).sort(sorted);
  let sortedGroups: Groups2 = {};
  keys.forEach(key => {
    sortedGroups[key] = groups[key];
  })
  return sortedGroups;
}

export {convertDegreesToThermalSensation, sorted, sortByTypeAdventure};