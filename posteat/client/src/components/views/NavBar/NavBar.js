import React from "react";
import { Layout, Menu } from "antd";
import Login from "./LoginButton";
import SearchInput from "./SearchInput";
import { useParams } from "react-router";
const { Header } = Layout;

function NavBar() {
  const { userId } = useParams();
  const items = [
    {
      label: <a href="/">가게</a>,
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
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["가게"]}
          items={items}
        />
        <SearchInput></SearchInput>
        <Login />
      </Header>
    </div>
  );
}

export default NavBar;
