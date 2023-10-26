import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/Pages/LandingPage";

const App = () => {
  return (
    <Layout className="layout">
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 64px)" }}>
        <Router>
          <Routes>
              <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </Layout>
  );
};

export default App;
