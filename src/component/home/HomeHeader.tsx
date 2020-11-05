import React from 'react';
import logo from '../../assets/logo.png';
import loginIcon from '../../assets/login-icon.png';
import './Home.css';

const HomeHeader = () => {
  return (
    <div className="Home-header">
      <div className="Home-header-start">
        <a className="Home-logo" href="https://www.naver.com">
          <img className="Home-logo-image" src={logo} alt="Logo" />
          <div className="Home-logo-text">Find</div>
        </a>
      </div>
      <div className="Home-header-center">
        <a className="Home-header-button" href="https://www.naver.com">
          <div className="Home-header-button-text">찾았다</div>
        </a>
        <a className="Home-header-button" href="https://www.naver.com">
          <div className="Home-header-button-text">주웠다</div>
        </a>
      </div>
      <div className="Home-header-end">
        <a className="Home-login-button" href="https://www.naver.com">
          <img
            className="Home-login-button-image"
            src={loginIcon}
            alt="loginIcon"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeHeader;
