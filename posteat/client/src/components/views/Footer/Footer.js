import React from "react";
import { FrownOutlined, RobotOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      style={{
        height: "80px",
        fontSize: "1rem",
        backgroundColor: "#001529",
        color: "#FFF",
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div>
        HIMEDIA <FrownOutlined />
      </div>
      <div>
        <RobotOutlined />
      </div>
    </div>
  );
};

export default Footer;
