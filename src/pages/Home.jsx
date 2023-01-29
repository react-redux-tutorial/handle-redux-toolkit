import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser,selectUserToken } from "../store/userSlice";

function Home() {
  const user = useSelector(selectUser).user
  console.log('user',user)
  const token = useSelector(selectUserToken)

  return (
    <main className="wrapper">
      <div className="container">
        {token ? (
          <>
            <h1 className="title">환영합니다! {user.username}님</h1>
            <Link to="/user" className="link-login">
              프로필 보기
            </Link>
          </>
        ) : (
          <>
            <h2 className="title">반갑습니다! 로그인 해주세요</h2>
            <Link to="/login" className="link-login">
              로그인 하기!
            </Link>
          </>
        )}
      </div>
    </main>
  );
}

export default Home;
