import { Button, Row } from "antd";
import React, { useState } from "react";
import GridCard from "./GridCard";

// 재사용 가능하게 만들거나 / gridcard와 합치거나 / 원래대로 돌려놓기..
<<<<<<< HEAD
=======
// 이제 쓰이는 곳이 없습니다
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
const LoadItem = (props) => {
  const [ItemCount, setItemCount] = useState(20);
  const loadMoreItems = () => {
    setItemCount(ItemCount + 20);
  };

  return (
    <>
      <div>
        <Row gutter={[10, 10]}>
          {new Array(ItemCount).fill(null).map((_, index) => {
            return (
              <GridCard
<<<<<<< HEAD
                LandingPage
=======
                type = {props.type}
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
                storeId={index + 1}
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
    </>
  );
};

export default LoadItem;
