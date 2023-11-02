import React, { useEffect, useState } from "react";
import MainImage from "../MainImage/MainImage";
import MovieInfo from "./MovieInfo";
import { useParams, useNavigate } from "react-router-dom";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import ActorsGrid from "./ActorsGrid";
import { Button } from "antd";

const Detail = () => {
  // url에 들어있는 정보 사용
  const { movieId } = useParams();
  const navigate = useNavigate();
  // state
  const [Movie, setMovie] = useState({});
  const [Cast, setCast] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  useEffect(() => {
    // 영화 정보
    const endpointInfo = `${API_URL}${movieId}?api_key=${API_KEY}`;
    // 배우 정보
    const endpointCrew = `${API_URL}${movieId}/credits?api_key=${API_KEY}`;

    // 영화정보 요청
    fetch(endpointInfo)
      // 결과 타입 변환
      .then((response) => response.json())
      .then((response) => {
        setMovie(response);
      });

    // 배우정보 요청
    fetch(endpointCrew)
      .then((response) => response.json())
      .then((response) => {
        setCast(response.cast);
      });
  }, []);

  // 버튼 핸들러
  function handleUseHistory() {
    navigate("/");
  }

  function toggleActorView() {
    setActorToggle(!ActorToggle);
  }

  return (
    <div>
      {/* main image */}
      {
        <>
          <MainImage
            image={`${IMAGE_BASE_URL}w1280${Movie.poster_path}`}
            title={Movie.title}
            overview={Movie.overview}
          />
          {/* body */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button onClick={handleUseHistory}>영화 목록</Button>
          </div>
          <div style={{ width: "85%", margin: "20px auto" }}>
            {/* Movie Info */}
            <MovieInfo movie={Movie} />
            {/* button */}
            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <Button onClick={toggleActorView}>배우 목록</Button>
            </div>
            {/* Actors Grid - toggle*/}
            {ActorToggle && <ActorsGrid cast={Cast} />}
          </div>
        </>
      }
    </div>
  );
};

export default Detail;
