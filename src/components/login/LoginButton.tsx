import React from 'react';
import axios from 'axios';
import loginIcon from '../../assets/login-icon.png';
import {
  CLIENT_ID,
  GITHUB_LOGIN_URL,
  SERVER_URL,
} from '../../constants/constants';

const LoginButton: React.FC = () => {
  const login = async () => {
    const response = await axios.get(
      `${GITHUB_LOGIN_URL}?client_id=${CLIENT_ID}&redirect_uri=${SERVER_URL}/api/login`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(response.data);
  };

  return (
    <>
      <button className="Home-login-button" onClick={login}>
        <a
          href={`${GITHUB_LOGIN_URL}?client_id=${CLIENT_ID}&redirect_uri=${SERVER_URL}/api/login`}
        >
          <img
            className="Home-login-button-image"
            src={loginIcon}
            alt="loginIcon"
          />
        </a>
      </button>
    </>
  );
};

export default LoginButton;
