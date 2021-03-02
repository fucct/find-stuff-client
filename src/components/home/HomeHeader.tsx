import React from 'react';
import logo from '../../assets/mountain-icon.png';
import './Home.css';
import styled, { css } from 'styled-components';
import { HeaderMenuItem } from './HeaderMenuItem';

export const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 42px;
  font-size: 14px;
  padding: 5px;
  margin: 5px;
  color: black;
  background-color: white;
  border: solid 2px rgb(217, 226, 239);
  ${(props) =>
    props.color &&
    css`
      color: white;
      background: #00c471;
      border: 2px solid #00c471;
    `};
`;
const HomeHeader = () => {
  return (
    <header className="Home-header">
      <div className="Home-header-center">
        <a className="Home-logo" href="/">
          <img className="Home-logo-image" src={logo} alt="Logo" />
          <div className="Home-logo-text">Santa</div>
        </a>
        <HeaderMenuItem links="https://www.naver.com" name="소개" />
        <HeaderMenuItem links="https://www.naver.com" name="모집하기" />
        <HeaderMenuItem links="https://www.naver.com" name="참여하기" />
      </div>
      <div className="Home-header-end">
        <Button>로그인</Button>
        <Button color="true">회원가입</Button>
      </div>
    </header>
  );
};

export default HomeHeader;
