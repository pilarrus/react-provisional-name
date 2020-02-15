import React from "react";

type SelectOrderProps = {
  options: string[][],
  setSortBy: (sortBy: string) => void
}

const SelectOrder: React.FC<SelectOrderProps> = ({options, setSortBy}) => {
  return (
    <select
      className="select-order"
      defaultValue="Default"
      onChange={e => setSortBy(e.target.value)}
    >
      <option value="Default" disabled>
        Ordenar por
      </option>
      {options.map(option => (
        <option key={option[0]} value={option[0]}>
          {option[1]}
        </option>
      ))}
    </select>
  );
};

export default SelectOrder;
