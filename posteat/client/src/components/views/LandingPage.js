import React from "react";
import { Content } from "antd/es/layout/layout";
import { Button, Row } from "antd";
import GridCard from "./commons/GridCard";

const LandingPage = () => {
  // 더보기 버튼 누르면 식당 목록 더 표시하는 기능.
  const loadMoreItems = () => {};
  
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
            <Row gutter={[10, 10]}>
              {new Array(20).fill(null).map((_, index) => {
                return (
                  <GridCard
                    LandingPage
                    storeId={index + 1}
                    // storePicturePath=
                    storeName={`storename ${index + 1}`}
                    key={index + 1}
                  />
                );
              })}
            </Row>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "inlineBlock",
              margin: "20px",
            }}
          >
            <Button onClick={loadMoreItems}>더보기</Button>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default LandingPage;
