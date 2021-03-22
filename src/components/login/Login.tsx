import React, { useState } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { TokenState } from './MemberState';
import './Login.css';
import { BoxButton } from '../buttons/BoxButton';
import logo from '../../assets/mountain-icon.png';

type userInfoForm = {
  id: string;
  password: string;
};

const Login: React.FC = () => {
  const userToken: string = useRecoilValue(TokenState);
  const [userInfo, setUserInfo] = useState<userInfoForm>({
    id: '',
    password: '',
  });

  const login = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('무야호');
  };

  const onChange = () => {
    console.log('zz');
  };

  return (
    <div className="login-body">
      <div className="login-box">
        <div className="Home-logo login-box-logo">
          <img
            className="Home-logo-image login-box-logo-image"
            src={logo}
            alt="Logo"
          />
          <div className="Home-logo-text login-box-logo-text">Santa</div>
        </div>
        <input
          className="login-box-input id-input"
          type="text"
          placeholder="아이디"
          onChange={onChange}
        />
        <input
          className="login-box-input password-input"
          type="text"
          placeholder="패스워드"
          onChange={onChange}
        />
        <div className="login-buttons">
          <BoxButton
            links="/"
            name="로그인"
            width="300px"
            onClick={login}
            color
          />
        </div>
        <div className="find-password">
          <a href="/find-password">비밀번호 뭐더라?</a>
        </div>
        <div className="social-logins">
          <a href="https://www.naver.com">
            <div className="social-login">
              <img
                className="social-login-icon"
                src="https://image.yes24.com/sysimage/mv2/member/ico/login_icon_Naver.svg?v=c_20210115"
                alt="네이버 아이디로 로그인"
              />
              네이버 로그인
            </div>
          </a>
          <a href="https://www.kakao.com">
            <div className="social-login">
              <img
                className="social-login-icon"
                src="https://image.yes24.com/sysimage/mv2/member/ico/login_icon_Kakao.svg?v=c_20210115"
                alt="카카오 아이디로 로그인"
              />
              카카오 로그인
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
