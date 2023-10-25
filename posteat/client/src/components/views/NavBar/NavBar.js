import React from "react";
import { Layout, Menu } from "antd";
import Login from "./Login";
const { Header } = Layout;
function NavBar() {
  const menu_list = ["로고", "가게", "내정보"];
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
          items={menu_list.map((value) => {
            const key = value;
            return {
              key,
              label: `${key}`,
            };
          })}
        />
        <Login />
      </Header>
    </div>
  );
}

export default NavBar;
