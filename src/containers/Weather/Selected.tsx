import React from "react";
import Select from "react-select";
import madridMun from "./municipality_codes";

const options = madridMun;

class SelectInput extends React.Component {
  state = {
    selectedOption: null
  };

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption: 28 + selectedOption.codmun });
  };

  render() {
    const { selectedOption } = this.state;
    console.log(selectedOption);
    return (
      <div className="weather__select">
        <p>Busca tu municipio</p>
        <div className="weather__select-box">
          <Select
            value={selectedOption}
            options={options}
            isClearable={true}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SelectInput;
