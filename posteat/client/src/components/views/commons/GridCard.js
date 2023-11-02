import React from "react";
import { Avatar, Card, Col } from "antd";
import img from "../../../img/food.jpg";
import { UserOutlined } from "@ant-design/icons";
import DibsButton from "./DibsButton";
const { Meta } = Card;

const GridCard = (props) => {
  if (props.LandingPage) {
    return (
      <Col xs={24} md={12} lg={6}>
        <DibsButton />
        <a href={`/store/${props.storeId}`}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={<img alt={props.storeName} src={img} />}
          >
            <Meta title={props.storeName} description="category" />
            <span>rating </span>
            <span>reviewcount </span>
          </Card>
        </a>
      </Col>
    );
  } else if (props.UserDibStores) {
    return (
      <Col xs={24}>
        <DibsButton />
        <a href={`/store/${props.storeId}`}>
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
              <Meta title={props.storeName} description="내가 남긴 리뷰" />
              <span>내가 남긴 별점 </span>
            </div>
          </Card>
        </a>
      </Col>
    );
  } else if (props.UserProfile) {
    return (
      <Col xs={6}>
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
                <h2>name</h2>
              </div>
            }
          ></Card>
        </a>
      </Col>
    );
  }
};

export default GridCard;
