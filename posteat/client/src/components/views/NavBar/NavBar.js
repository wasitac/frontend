<<<<<<< HEAD
import React from "react";
import { Layout, Menu } from "antd";
import Login from "./LoginButton";
import { useParams } from "react-router";
import logo from "../../../img/logo.png";
=======
import { Button, Layout, Menu } from "antd";
import { useParams } from "react-router";
import logo from "../../../img/logo.png";
import { useRecoilState } from "recoil";
import { loginState } from "../../../atom";

>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
const { Header } = Layout;

// TODO: 클릭해도 포커스가 안바뀜
function NavBar() {
  const { userId } = useParams();
  const [login, setLogin] = useRecoilState(loginState);
const handleLoginButton = () => {
  setLogin(0)
}
  const items = [
    {
      label: <a href="/posteat">가게</a>,
<<<<<<< HEAD
      key: "stores",
=======
      key: 1,
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
    },
    {
      // 로그인 안되어있으면 알림창 띄우고 로그인 창으로 이동하기
      label: <a href={login ? `/userinfo/${userId}` : "/login"}>내정보</a>,
      key: 2,
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
<<<<<<< HEAD
        <img alt="로고" src={logo} width="60" />
=======
        <a href="/posteat" style={{ marginTop: "25px", paddingRight: "30px" }}>
          <img alt="로고" src={logo} width="60" />
        </a>

>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
        />
<<<<<<< HEAD
        <Login />
=======
        {login ? (
          <Button
            style={{ position: "absolute", right: "30px" }}
            onClick={handleLoginButton}
          >
            로그아웃
          </Button>
        ) : (
          <Button style={{ position: "absolute", right: "30px" }} href="/login">
            로그인
          </Button>
        )}
>>>>>>> 5842ca2622701758cc130ba6892ecdc3cc0ef7e7
      </Header>
    </div>
  );
}

export default NavBar;
