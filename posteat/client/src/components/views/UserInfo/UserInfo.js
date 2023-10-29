import React, { useState } from "react";
import { Avatar, Card, Row } from "antd";
import GridCard from "../commons/GridCard";
import { UserOutlined } from "@ant-design/icons";

const tabList = [
  {
    key: "dibs",
    label: "dibs",
  },
  {
    key: "follower",
    label: "follower",
  },
  {
    key: "following",
    label: "following",
  },
];
const contentList = {
  dibs: (
    <Row gutter={[10, 10]}>
      {new Array(20).fill(null).map((_, index) => {
        return (
          <GridCard
            UserDibStores
            storeId={index + 1}
            // storePicturePath=
            storeName={`storename ${index + 1}`}
            key={index + 1}
          />
        );
      })}
    </Row>
  ),
  follower: (
    <Row gutter={[10, 10]}>
      {new Array(20).fill(null).map((_, index) => {
        return (
          <GridCard
            UserProfile
            storeId={index + 1}
            // storePicturePath=
            storeName={`storename ${index + 1}`}
            key={index + 1}
          />
        );
      })}
    </Row>
  ),
  following: (
    <Row gutter={[10, 10]}>
      {new Array(20).fill(null).map((_, index) => {
        return (
          <GridCard
            UserProfile
            storeId={index + 1}
            // storePicturePath=
            storeName={`storename ${index + 1}`}
            key={index + 1}
          />
        );
      })}
    </Row>
  ),
};

const UserInfo = () => {
  const [activeTabKey, setActiveTabKey] = useState("dibs");
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div style={{ width: "55%", margin: "0 auto", paddingTop: 30 }}>
      <Card
        style={{
          width: "100%",
          // marginTop: "30px",
        }}
        cover={
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Avatar size={200} icon={<UserOutlined />} />
            <h2>name</h2>
          </div>
        }
        actions={[<div>follower</div>, <div>following</div>, <div>dibs</div>]}
      ></Card>
      <Card
        style={{
          width: "100%",
        }}
        title="내 활동"
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
        tabProps={{
          size: "middle",
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </div>
  );
};
export default UserInfo;
