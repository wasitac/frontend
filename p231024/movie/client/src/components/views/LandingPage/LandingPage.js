import React from "react";
const LandingPage = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        {/* main image */}
        <div style={{ width: "85%", margin: "0 auto" }}>
          <h2>최신 영화</h2>
          <hr />
          {/* movie grid card */}
        </div>
        <div style={{ textAlign: "center", display: "inlineBlock" }}>
          <button>더보기</button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;