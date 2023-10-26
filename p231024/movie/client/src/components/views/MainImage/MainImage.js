import React from "react";

const MainImage = (props) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `URL(${props.image})`,
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "25px",
          maxWidth:'500px',
          padding: '15px',
          color: '#eee',
          backgroundColor: '#eee1'
        }}
      >
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};

export default MainImage;
