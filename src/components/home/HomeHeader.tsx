import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/mountain-icon.png';
import './Home.css';
import styled, { css } from 'styled-components';
import { MenuButton } from '../buttons/MenuButton';
import { BoxButton } from '../buttons/BoxButton';

const HeaderArea = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
`;

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 65px;
  transition: 0.4s ease;
  &.hide {
    background: white;
  }
`;

const HomeHeader = () => {
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  useEffect(() => {
    documentRef.current.addEventListener('scroll', handleScroll);
    return () =>
      documentRef.current.removeEventListener('scroll', handleScroll);
  }, [pageY]);

  return (
    <HeaderArea>
      <HeaderWrap className={hide ? 'hide' : ''}>
        <header className="Home-header">
          <div className="Home-header-center">
            <a className="Home-logo" href="/">
              <img className="Home-logo-image" src={logo} alt="Logo" />
              <div className="Home-logo-text">Santa</div>
            </a>
            <MenuButton links="https://www.naver.com" name="소개" />
            <MenuButton links="/create" name="모집하기" />
            <MenuButton links="/join" name="참여하기" />
          </div>
          <div className="Home-header-end">
            <BoxButton links="/login" name="로그인" />
            <BoxButton links="/sign-up" name="회원가입" color />
          </div>
        </header>
      </HeaderWrap>
    </HeaderArea>
  );
};

export default HomeHeader;
