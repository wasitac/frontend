import React from "react";
import { Content } from "antd/es/layout/layout";
import { Row } from "antd";
import GridCard from "../commons/GridCard";

const LandingPage = () => {
  return (
    <div>
      <Content
              style={{
                padding: "0 50px",
              }}
            >
        <div style={{ width: "100%" }}>
          {/* main image */}
          <div style={{ width: "85%", margin: "0 auto" }}>
            <h2>식당 리스트</h2>
            <hr />
            {/* movie grid card */}
            <Row>
              {new Array(20).fill(null).map((_, index) => {
                return(
                  <GridCard>
                    path={}
                    title={}
                  </GridCard>
                )
              })}
            </Row>
          </div>
          <div style={{ textAlign: "center", display: "inlineBlock" }}>
            <button>더보기</button>
          </div>
        </div>
        </Content>
    </div>
  );
};

export default LandingPage;
