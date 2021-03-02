import React from 'react';
import { useRecoilState } from 'recoil';
import { TokenState } from './MemberState';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../constants/constants';

const LoginButton: React.FC = () => {
  const [token, setToken] = useRecoilState(TokenState);
  const history = useHistory();

  const login = async (e: React.MouseEvent) => {
    e.preventDefault();
    const response = await axios.get(`${SERVER_URL}/api/login/github`);
    window.location.href = response.data;
    console.log(response.data);
  };

  return <button className="Home-login-button">로그인</button>;
};

export default LoginButton;
