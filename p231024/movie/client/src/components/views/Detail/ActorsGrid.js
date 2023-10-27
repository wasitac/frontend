import React from "react";
import { Row } from "antd";
import AntCard from "../commons/AntCard";
import { IMAGE_BASE_URL } from "../../Config";

const ActorsGrid = (props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Row gutter={[10, 10]}>
        {props.cast.map((value) => {
          if (value.profile_path) {
            return (
              // 반복생성되는 요소를 묶어주고 key를 생성해준다. <></>로 단축 가능
              <React.Fragment key={value.id}>
                <AntCard
                  detail
                  path={`${IMAGE_BASE_URL}w400${value.profile_path}`}
                  castName={value.name}
                  character={value.character}
                />
              </React.Fragment>
            );
          }
        })}
      </Row>
    </div>
  );
};

export default ActorsGrid;
