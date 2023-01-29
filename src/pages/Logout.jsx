import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logoutAction } from '../store/userSlice'

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem("testToken");
    //로그아웃 할 때 userSlice의 token 값 null로 변경
    dispatch(logoutAction());
    navigate("/");
  }

  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title login">로그아웃 하실래요?</h1>

        <button className="btn logout" onClick={logoutHandler}>
          로그아웃
        </button>
      </div>
    </main>
  );
}

export default Logout;
