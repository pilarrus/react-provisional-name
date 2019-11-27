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

export {convertDegreesToThermalSensation};