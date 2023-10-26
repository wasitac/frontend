import React from "react";

function Login() {
  const isLogin = () => {
    //로그인 검사해서 로그인, 로그아웃
    return "로그인";
  };
  return (
    <div style={{ position: "absolute", right: "30px" }}>
      <a href="http://localhost:3000/signin">{isLogin()}</a>
    </div>
  );
}

export default Login;
