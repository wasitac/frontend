import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import Items from "./views/Items/Items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 144px)" }}>
        {/* 요청된 경로로 페이지 이동 : 특정 컴포넌트 실행 */}
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
