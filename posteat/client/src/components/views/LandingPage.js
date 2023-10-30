import React from "react";
import { Content } from "antd/es/layout/layout";
import LoadItem from "./commons/LoadItem";

const LandingPage = () => {
  // 더보기 버튼 누르면 식당 목록 더 표시하는 기능.
 

  return (
    <div>
          
          <div style={{ width: "85%", margin: "0 auto" }}>
            <h2>식당 리스트</h2>
            <hr />
            <LoadItem />
          </div>
    </div>
  );
};

export default LandingPage;
