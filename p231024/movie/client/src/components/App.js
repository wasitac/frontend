import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import NavBar from "./views/NavBar/NavBar";
import Detail from "./views/Detail/Detail";
function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 144px)" }}>
        {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트 실행 */}
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* 경로에 ':'가 붙으면 변수취급 */}
            <Route path={"/movie/:movieId"} element={<Detail />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
