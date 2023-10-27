import React from "react";
import { Col } from "antd";

const GridCard = (props) => {
  if (props.landingPage) {
    return (
      <Col xs={12} md={8} lg={8} xl={6}>
        <div>
          <a href={`/movie/${props.movieId}`}>
            <img style={{ width: "100%" }} src={props.path} alt={props.title} />
          </a>
        </div>
      </Col>
    );
  } else if (props.detail) {
    return (
      <Col xs={6} md={6} lg={6} xl={6}>
        <div>
          <img
            style={{ width: "100%" }}
            src={props.path}
            alt={props.castName}
          />
          <span>{props.castName}</span>
        </div>
      </Col>
    );
  }
};

export default GridCard;

// {
//   xs: '480px',
//   sm: '576px',
//   md: '768px',
//   lg: '992px',
//   xl: '1200px',
//   xxl: '1600px',
// }
