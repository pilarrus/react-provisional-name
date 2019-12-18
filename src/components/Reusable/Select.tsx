import { Select } from "antd";
import React from "react";
import adventures from "../../fake-data/adventures";

const { Option } = Select;

const Select2: React.FC = () => {
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
      placeholder="Select a person"
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
      {adventures.map(adventure => (
        <Option key={adventure.id}>{adventure.name}</Option>
      ))}
    </Select>
  );
  
}

export default Select2;