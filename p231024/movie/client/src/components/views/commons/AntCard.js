import React from "react";
import { Card, Col } from "antd";
const { Meta } = Card;
const AntCard = (props) => {
  if (props.landingPage) {
    return (
      <Col xs={12} md={6} lg={4}>
        {/* <div>
          <a href={`/movie/${props.movieId}`}>
            <img style={{ width: "100%" }} src={props.path} alt={props.title} />
          </a>
        </div> */}
        <a href={`/movie/${props.movieId}`}>
          <Card
            hoverable
            style={{
              width: "100%",
            }}
            cover={<img alt={props.title} src={props.path} />}
          >
            <Meta title={props.title} />
          </Card>
        </a>
      </Col>
    );
  } else if (props.detail) {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card
          hoverable
          style={{
            width: "100%",
          }}
          cover={<img alt={props.castName} src={props.path} />}
        >
          <Meta title={props.castName} description={props.character} />
        </Card>
      </Col>
    );
  }
};

export default AntCard;
