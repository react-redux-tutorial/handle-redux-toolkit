import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginAction } from '../store/userSlice'
import axios from "axios";

function Login() {
  const URL = "https://dummyjson.com/auth/login";
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleId = (e) => {
    //아이디 input에 변경이 있을 때 userId에 저장
    setUserId(e.target.value);
  };

  const handlePassword = (e) => {
    //비밀번호 input에 변경이 있을 떄 password 변경
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        headers: {
          "Content-type": "application/json",
        },
        username: userId,
        password: password,
      });
      localStorage.setItem("testToken", res.data.token);
      dispatch(loginAction(res.data))
      //로그인 리듀서에 전달받은 정보들 저장
      navigate("/");
    } catch (error) {
      console.error(error);
    }
    setUserId("");
    setPassword("");
  };

  return (
    <main className="wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="title login">로그인 하기</h1>
        <input
          type="text"
          id="account"
          className="input-login"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={handleId}
        />
        <input
          type="password"
          id="password"
          className="input-login"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn login">
          로그인
        </button>
      </form>
    </main>
  );
}

export default Login;
