import React from "react";
import { Col } from "antd";

const GridCard = (props) => {
  return (
    <Col xs={24} md={12} lg={12} xl={8} xxl={6}>
      <div>
        <a href="#!">
          <img style={{ width: "100%" }} src={props.path} alt={props.title} />
        </a>
      </div>
    </Col>
  );
};

export default GridCard;
