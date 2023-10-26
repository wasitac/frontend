import { Row } from "antd";
import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../MainImage/MainImage";
import GridCard from "../commons/GridCard";

const LandingPage = () => {
  const [Movies, setMovies] = useState([]);
  // 페이지의 첫 번째 영화 정보 저장
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setMainMovieImage(Movies[3]);
      });
  }, [Movies]);

  return (
    <>
      <div style={{ width: "100%" }}>
        {/* main image */}
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${MainMovieImage.poster_path}`}
            title={MainMovieImage.title}
            overview={MainMovieImage.overview}
          />
        )}
        <div style={{ width: "85%", margin: "1rem auto" }}>
          <h2>인기 영화</h2>
          <hr />
          {/* movie grid card */}
          <Row gutter={[10, 10]}>
            {Movies.map(value => {
              return (
                // 반복생성되는 요소를 묶어주고 key를 생성해준다
                <React.Fragment key={value.id}>
                  <GridCard
                    path={`${IMAGE_BASE_URL}w400${value.poster_path}`}
                    title={value.title}
                  />
                </React.Fragment>
              );
            })}
          </Row>
        </div>
        <div style={{ textAlign: "center", display: "inlineBlock" }}>
          <button>더보기</button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
