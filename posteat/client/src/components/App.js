import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/Pages/LandingPage";
import StorePage from "./views/Pages/LandingPage";
import MyPage from "./views/Pages/LandingPage";
import SignInPage from "./views/Pages/LandingPage";
import SignUpPage from "./views/Pages/LandingPage";
const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 64px)" }}>
        <Router>
          <Routes>
            <Content
              style={{
                padding: "0 50px",
              }}
            >
              <Route path="/" element={<LandingPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Content>
          </Routes>
        </Router>
      </div>
      <Footer />
    </Layout>
  );
};

export default App;
