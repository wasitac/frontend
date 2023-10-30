import React from "react";
import { Col, Card } from "antd";
const { Meta } = Card;
const AntCard = (props) => {
  return (
    <Col xs={12} md={8} lg={6} xl={6}>
      <div>
        <a href="#!">
          <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <img style={{ width: "100%" }} src={props.path} alt={props.title} />
        </a>
      </div>
    </Col>
  );
};

export default AntCard;