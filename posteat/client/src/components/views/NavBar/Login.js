import React from "react";
import { Button } from 'antd';

function Login() {
  const isLogin = () => {
    //로그인 검사해서 로그인, 로그아웃
    return "로그인";
  };
  return (
    <div style={{ position: "absolute", right: "30px" }}>
      <Button>{isLogin()}</Button>
    </div>
  );
}

export default Login;
