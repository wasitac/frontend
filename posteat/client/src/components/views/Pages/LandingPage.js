import React, { useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Row, Button } from "antd";
import AntCard from "../commons/AntCard";

const LandingPage = () => {
  // state
  const [Stores, setStores] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);

  const loadMoreItems = ()=>{
    
  }
  return (
    <div style={{ width: "100%" }}>
      {/* main image */}
      <div style={{ width: "85%", margin: "0 auto" }}>
        <h2>식당 리스트</h2>
        <hr />
        <Row gutter={[10, 10]}>
          {/* 빈 배열을 식당목록 배열로 바꾸기 */}
          {new Array(20).fill(null).map((value, index) => {
            return (
              <React.Fragment key={index + 1}>
                <AntCard>
                  LandingPage
                  path={}
                  title={}
                </AntCard>
              </React.Fragment>
            );
          })}
        </Row>
      </div>
      <div style={{ textAlign: "center", display: "inlineBlock" }}>
      <Button onClick={loadMoreItems}>더보기</Button>
      </div>
    </div>
  );
};

export default LandingPage;
