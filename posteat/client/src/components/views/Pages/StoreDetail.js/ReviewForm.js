import React, { useState } from "react";
import { Rate, Input, Button } from "antd";
const { TextArea } = Input;

// 로그인 검사 후 작성 가능하게 해야함
const ReviewForm = () => {
  const [Star, setStar] = useState(0);
  const [ReviewContent, setReviewContent] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <Rate
        allowHalf
        value={Star}
        style={{ fontSize: "45px", margin: "20px" }}
        onChange={setStar}
      />
      <TextArea
        rows={4}
        placeholder="리뷰를 작성하지 않았습니다."
        onChange={setReviewContent}
      />
      {console.log(Star)}
      {console.log(ReviewContent.target)}
      <Button style={{marginTop: "10px"}}>저장</Button>
    </div>
  );
};

export default ReviewForm;
