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

const equalsString = (x: string, y: string) => x === y ? true : false;

export {convertDegreesToThermalSensation, equalsString};