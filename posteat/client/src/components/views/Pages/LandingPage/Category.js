import React, { useState } from "react";
import { Space, Tag } from "antd";
const { CheckableTag } = Tag;

const tagsData = ["한식", "일식", "중식"];

const Category = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <>
      <span
        style={{
          marginRight: 8,
          fontSize:'16px'
        }}
      >
        Categories:
      </span>
      <Space size={[0, 8]} wrap>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
            style= {{ fontSize:'16px'}}
          >
            {tag}
          </CheckableTag>
        ))}
      </Space>
    </>
  );
};
export default Category;
