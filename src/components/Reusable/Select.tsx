import { Select } from "antd";
import React from "react";

const { Option } = Select;

type SelectType = {
  placeholder: string;
  options: any[];
};

const Select2: React.FC<SelectType> = ({placeholder, options}) => {
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log("blur");
  }
  
  function onFocus() {
    console.log("focus");
  }
  
  function onSearch(val: any) {
    console.log("search:", val);
  }
  
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        //@ts-ignore
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {options.map(op => (
        <Option key={op.id}>{op.name}</Option>
      ))}
    </Select>
  );
  
}

export default Select2;