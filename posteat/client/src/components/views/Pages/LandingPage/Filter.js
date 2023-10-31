import React from "react";
import { Select } from "antd";
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
