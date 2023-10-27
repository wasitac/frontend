import { Layout, Menu } from "antd";
import React from "react";
const { Header } = Layout;
const Navbar = () => {
  const menu_list = ["로고", "메뉴1", "메뉴2", "dd", "dd"];
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          forceSubMenuRender={false}

          items={menu_list.map((value, index) => {
            const key = index + 1;
            return {
              key,
              label: `${value}`,
            };
          })}
        />
      </Header>
    </Layout>
  );
};
export default Navbar;
