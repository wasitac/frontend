import React from "react";
import { Layout, Menu } from "antd";
import Login from "./LoginButton";
import { useParams } from "react-router";
import logo from "../../../img/logo.png";
const { Header } = Layout;

function NavBar() {
  const { userId } = useParams();
  const items = [
    {
      label: <a href="/posteat">가게</a>,
      key: "stores",
    },
    {
      label: <a href={`/userinfo/${userId}`}>내정보</a>,
      key: "userInfo",
    },
  ];

  return (
    <div>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img alt="로고" src={logo} width="60" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["가게"]}
          items={items}
        />
        <Login />
      </Header>
    </div>
  );
}

export default NavBar;
