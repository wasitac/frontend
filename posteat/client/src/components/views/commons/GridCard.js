import React, { useState } from "react";
import { Avatar, Button, Card, Col, Row } from "antd";
import img from "../../../img/food.jpg";
import { UserOutlined } from "@ant-design/icons";
import DibsButton from "./DibsButton";
const { Meta } = Card;

// userinfo탭 3개 숫자 같이 바뀌는문제 db연동되면 해결하기
const GridCard = (props) => {
  const [ItemCount, setItemCount] = useState(20);

  const loadMoreItems = () => {
    setItemCount(ItemCount + 20);
  };

  const cardType = (index) => {
    if (props.type === "LandingPage") {
      return (
        <Col xs={24} md={12} lg={6}>
          <DibsButton />
          <a href={`/store/${index + 1}`}>
            <Card
              hoverable
              style={{
                width: "100%",
              }}
              cover={<img alt={index + 1} src={img} />}
            >
              <Meta title={index + 1} description="category" />
              <span>rating </span>
              <span>reviewcount </span>
            </Card>
          </a>
        </Col>
      );
    } else if (props.type === "UserDibStores") {
      return (
        <Col xs={24}>
          <DibsButton />
          <a href={`/store/${index + 1}`}>
            <Card
              hoverable
              style={{
                width: "100%",
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div style={{ backgroundColor: "#eeec", padding: "15px" }}>
                <Meta title={index + 1} description="내가 남긴 리뷰" />
                <span>내가 남긴 별점 </span>
              </div>
            </Card>
          </a>
        </Col>
      );
    } else if (props.type === "UserProfile") {
      return (
        <Col xs={12}>
          {/* 다른유저의 정보창으로 이동. */}
          <a href="/userinfo/undefined">
            <Card
              style={{
                width: "100%",
                textAlign: "center",
                height: "160px",
              }}
              cover={
                <div style={{ marginTop: "10px" }}>
                  <Avatar size={80} icon={<UserOutlined />} />
                  <h2>name{index + 1}</h2>
                </div>
              }
            ></Card>
          </a>
        </Col>
      );
    }
  };

  return (
    <>
      <Row gutter={[10, 10]}>
        {new Array(ItemCount).fill(null).map((_, index) => {
          return (
            <React.Fragment key={index + 1}>{cardType(index)}</React.Fragment>
          );
        })}
      </Row>
      <div
        style={{
          textAlign: "center",
          display: "inlineBlock",
          margin: "20px",
        }}
      >
        <Button onClick={loadMoreItems}>더보기</Button>
      </div>
    </>
  );
};

export default GridCard;
