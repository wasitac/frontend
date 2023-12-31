import React from "react";
import { Select } from "antd";
<<<<<<< HEAD

const options = [
  {
    value: 1,
    label: "한식",
  },
  {
    value: 2,
    label: "일식",
  },
  {
    value: 3,
    label: "중식",
  },
];
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Filter = () => (
  <div style={{ display: "inline-block", margin: "5px" }}>
    <Select
      mode="카테고리"
      style={{
        width: "100%",
        marginBottom: "5px",
      }}
      placeholder="카테고리"
      onChange={handleChange}
      options={options}
    />
    <Select
      showSearch
      style={{
        width: 200,
        marginBottom: "5px",
=======
import Category from "./Category";

const Filter = () => (
  <div style={{ margin: "5px" }}>
    <Category />
    <br />
    <Select
      showSearch
      style={{
        width: "200px",
        marginTop: "10px",
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
      }}
      placeholder="정렬 기준"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? "").includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
      options={[
        {
          value: "rating",
          label: "평점",
        },
        {
          value: "dibs",
          label: "찜 수",
        },
        {
          value: "review",
          label: "리뷰 수",
        },
      ]}
    />
  </div>
);
export default Filter;
