import React from "react";
import img from "../../../img/food.jpg";
import DibsButton from "../commons/DibsButton";
// props로 storeId를 받아 해당가게의 정보 표시
const StoreInfo = (props) => {
  return (
    <>
      <div style={{ textAlign: "center", padding: "20px", position: 'relative'}}>
        <DibsButton />
        <div style={{textAlign: 'left', margin:'30px'}}>
          <h1>{props.storeId}</h1>
          <p>안녕하세요 </p>
        </div>

        <img
          style={{
            position: "relative",
            backgroundImage: { img },
            width:'90%',
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          src={img}
          alt="식당사진"
        />
        
      </div>
    </>
  );
};

export default StoreInfo;
