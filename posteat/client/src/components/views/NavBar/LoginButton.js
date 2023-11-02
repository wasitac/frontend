import React from "react";
import { Button } from "antd";

function Login() {
  const isLogin = () => {
    //로그인 검사해서 로그인 상태라면 로그아웃을 표시하기
    if(true)
      return "로그인";
    else
      return "로그아웃";
  };
  return (
    <Button style={{ position: "absolute", right: "30px" }} href="/login">
      {isLogin()}
    </Button>
  );
}

export default Login;
