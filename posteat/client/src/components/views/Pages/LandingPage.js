import React from "react";
import { Content } from "antd/es/layout/layout";

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
