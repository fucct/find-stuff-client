import React from 'react';
import HomeBody from './HomeBody';
import HomeHeader from './HomeHeader';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <HomeBody />
    </div>
  );
};

export default Home;
