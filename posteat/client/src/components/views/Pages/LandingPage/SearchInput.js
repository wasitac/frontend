import React from "react";
import { Input } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchInput = () => (
  <div>
    <Search
      placeholder="장소 또는 음식 이름으로 검색하세요"
      onSearch={onSearch}
      size="large"
      style={{
        display: "block",
        width: "80%",
        margin: "60px auto",
      }}
    />
  </div>
);
export default SearchInput;
