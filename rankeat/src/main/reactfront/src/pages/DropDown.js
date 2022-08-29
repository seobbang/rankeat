import React from "react";
import { Select } from 'antd';
const { Option } = Select;


const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (value) => {
  console.log('search:', value);
};

const DropDown = () => {

  return(
    <Select
      showSearch
      placeholder="오늘 가고 싶은 식당이 어디인가요?"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
    >
      <Option value="Sinchon">Sinchon</Option>
      <Option value="Daehyeon">Daehyeon</Option>
      <Option value="Ahyeon">Ahyeon</Option>
    </Select>
    )
}



export default DropDown;