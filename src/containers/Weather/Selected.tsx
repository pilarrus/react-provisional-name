import React from "react";
import Select from "react-select";
import madridMun from "./municipality_codes";

const options = madridMun;

const style = {
  width: "30%"
}

const SelectInput = () => (
  <div className="selectWeather" style={style}>
    <Select options={options} isClearable={true} />
  </div>
)

export default SelectInput;