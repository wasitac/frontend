import React, { useEffect, useState } from "react";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../MainImage/MainImage";
import AntCard from "../commons/AntCard";
import { Row, Button } from "antd";

const LandingPage = () => {
  const [Movies, setMovies] = useState([]);
  // 페이지의 첫 번째 영화 정보 저장
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [CurrentPage, setCurrentPage] = useState(1);

  function fetchMovies(CurrentPage) {
    const endpoint = `${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        // setMovies(Movies.concat(response.results));
        setMovies([...Movies, ...response.results]);
        setMainMovieImage(response.results[0]);
        setCurrentPage(CurrentPage + 1);
      });
  }

  useEffect(() => {
    fetchMovies(CurrentPage);
  }, []); //뒤에 배열이 오면 한번만 실행(의존성 배열)

  const loadMoreItems = () => {
    fetchMovies(CurrentPage);
  };

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
            {Movies.map((value) => {
              return (
                // 반복생성되는 요소를 묶어주고 key를 생성해준다. <></>로 단축 가능
                <React.Fragment key={value.id}>
                  <AntCard
                    landingPage
                    path={`${IMAGE_BASE_URL}w400${value.poster_path}`}
                    title={value.title}
                    movieId={value.id}
                  />
                </React.Fragment>
              );
            })}
          </Row>
        </div>
        <div style={{ textAlign: "center", display: "inlineBlock" }}>
          <Button onClick={loadMoreItems}>더보기</Button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
