import React, { useState } from "react";
import { Avatar, Button, Card, Col, Row, Statistic } from "antd";
import GridCard from "../../commons/GridCard";
import { UserOutlined, SettingOutlined, LikeOutlined } from "@ant-design/icons";

const confirmQuit = () => {
  if (window.confirm("정말 탈퇴하시겠습니까?")) {
    var nameToCompare = window.prompt(
      "이름을 입력하고 확인을누르면 탈퇴가 완료됩니다."
    );
    // 이름을 비교하고 탈퇴 진행
    console.log(nameToCompare);
  }
};

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
  {
    key: "setting",
    label: <SettingOutlined style={{ fontSize: "18px" }} />,
  },
];

const contentList = {
  dibs: (
    <GridCard
      type="UserDibStores"
    />
  ),
  follower: (
    <GridCard
      type="UserProfile"
    />
  ),
  following: (
    <GridCard
      type="UserProfile"
    />
  ),
  //
  setting: (
    <>
      <Button type="primary" danger onClick={confirmQuit}>
        탈퇴하기
      </Button>
    </>
  ),
};

const UserInfo = () => {
  const [activeTabKey, setActiveTabKey] = useState("dibs");
  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  return (
    <div
      style={{
        width: "65%",
        minWidth: "430px",
        margin: "0 auto",
        paddingTop: 30,
      }}
    >
      <div>
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
        >
          <Row
            style={{
              marginLeft: "50px",
            }}
          >
            <Col span={8}>
              <Statistic title="dibs" value={1128} prefix={<LikeOutlined />} />
            </Col>
            <Col span={8}>
              <Statistic title="follower" value={1128} />
            </Col>
            <Col span={8}>
              <Statistic title="following" value={93} />
            </Col>
          </Row>
        </Card>
      </div>
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
