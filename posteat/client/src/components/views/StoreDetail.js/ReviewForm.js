import React, { useState } from "react";
import { Rate, Input } from "antd";
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
        // maxLength={}
        onChange={setReviewContent}
      />
      {console.log(Star)}
      {/* ReviewContent.target.value에 접근하면 수정한 당시엔 콘솔에 찍히는데 새로고침하고 나면 에러가 발생함.
       Uncaught TypeError: Cannot read properties of undefined (reading 'value')*/}
      {/*ReviewContent에 빈 문자열이 들어있어서 발생하는문제. */}
      {console.log(ReviewContent.target)}
    </div>
  );
};

export default ReviewForm;
