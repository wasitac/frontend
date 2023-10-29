import React from "react";
import { Input } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchInput = () => (
  <Search
    placeholder="장소 또는 음식 이름으로 검색하세요"
    onSearch={onSearch}
    style={{
      margin: "0 auto",
      width: "50%",
    }}
  />
);
export default SearchInput;
