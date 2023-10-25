import { Layout, Menu } from "antd";
import React from "react";
const { Header } = Layout;
const Navbar = () => {
  const menu_list = ["로고", "메뉴1"];
  return (
    <Layout className="layout">
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
          defaultSelectedKeys={["로고"]}
          items={menu_list.map((value, index) => {
            const key = value;
            return {
              key,
              label: `${key}`,
            };
          })}
        />
      </Header>
    </Layout>
  );
};
export default Navbar;
