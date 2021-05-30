import React from 'react';
import FeaturedHome from '../../../components/FeaturedHome/FeaturedHome';
import FeaturedSupport from '../../../components/FeaturedSupport/FeaturedSupport';
import UpcomingStartups from '../../../components/UpcomingStartups/UpcomingStartups';

const Home = () => {
    return (
      <div>
        <FeaturedHome />
        <div className="home-background">
          <FeaturedSupport />
          <UpcomingStartups />
        </div>
      </div>
    );
};

export default Home;