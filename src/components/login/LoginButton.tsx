import React from 'react';
import axios from 'axios';
import loginIcon from '../../assets/login-icon.png';
import {
  CLIENT_ID,
  GITHUB_LOGIN_URL,
  SERVER_URL,
} from '../../constants/constants';
import { useRecoilState } from 'recoil';
import { TokenState } from './MemberState';
import { Link } from 'react-router-dom';

const LoginButton: React.FC = () => {
  const [token, setToken] = useRecoilState(TokenState);

  const login = async (e: React.MouseEvent) => {
    const response = await axios.get(
      `${GITHUB_LOGIN_URL}?client_id=${CLIENT_ID}&redirect_uri=${SERVER_URL}/api/login/github`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    setToken(response.data);
  };

  const sample = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(token);
  };

  return (
    <>
      <button className="Home-login-button" onClick={login}>
        <a
          href={`${GITHUB_LOGIN_URL}?client_id=${CLIENT_ID}&redirect_uri=${SERVER_URL}/api/login/github`}
        >
          <img
            className="Home-login-button-image"
            src={loginIcon}
            alt="loginIcon"
          />
        </a>
      </button>
      <button className="Home-login-button" onClick={sample}>
        <Link to="login">
          <img
            className="Home-login-button-image"
            src={loginIcon}
            alt="loginIcon"
          />
        </Link>
      </button>
    </>
  );
};

export default LoginButton;
