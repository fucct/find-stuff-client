import React from 'react';
import './Home.css';
import { Button } from './HomeHeader';

const HomeBody: React.FC = () => {
  return (
    <div className="Home-body">
      <div className="Home-body-block">
        <div className="Home-body-text">
          <h1 className="Home-body-title">지금 산타러 갑니다</h1>
          <div className="Home-body-contents">등산. 너란녀석..</div>
          <div className="Home-body-buttons">
            <Button>모집하기</Button>
            <Button color="true">참여하기</Button>
          </div>
        </div>
      </div>
      <div className="Home-body-list">
        <h2 className="body-list-title">실시간 인기 모임</h2>
        <div className="mountain-groups">
          <div className="mountain-group-card">설악산</div>
          <div className="mountain-group-card">금강산</div>
          <div className="mountain-group-card">한라ㅏㅅㄴ</div>
        </div>
      </div>
      {/*<div className="Home-body-block black">zz</div>*/}
    </div>
  );
};

export default HomeBody;
