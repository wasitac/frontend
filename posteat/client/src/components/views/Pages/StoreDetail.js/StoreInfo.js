import React from "react";
import img from "../../../../img/food.jpg";
import DibsButton from "../../commons/DibsButton";
// props로 storeId를 받아 해당가게의 정보 표시
const StoreInfo = (props) => {
  return (
    <>
      <div style={{ textAlign: "left", padding: "20px", position: "relative" }}>
        <DibsButton />
        <h1>{props.storeId}</h1>
        <p>안녕하세요 </p>

        <img
          style={{
            position: "relative",
            backgroundImage: { img },
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          src={img}
          alt="식당사진"
        />

        <div>
          <h3>위치</h3>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6323.999526661646!2d126.97293054944484!3d37.57862326348891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2c74aeddea1%3A0x8b3046532cc715f6!2z6rK967O16raB!5e0!3m2!1sko!2skr!4v1693552631268!5m2!1sko!2skr"
            style={{ width: "100%", minHeight: "300px", border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default StoreInfo;
