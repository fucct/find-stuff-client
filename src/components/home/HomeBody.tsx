import React from 'react';
import './Home.css';
import HomeBanner from '../../assets/home-banner.jpeg';
import HomeBanner2 from '../../assets/home-banner2.jpeg';

const HomeBody: React.FC = () => {
  return (
    <div className="Home-body">
      <div className="Home-body-block beige">
        <img className="Home-body-image" src={HomeBanner} alt="HomeBanner" />
      </div>
      <div className="Home-body-block white">
        <img className="Home-body-image" src={HomeBanner2} alt="HomeBanner2" />
      </div>
      <div className="Home-body-block black">zz</div>
    </div>
  );
};

export default HomeBody;
