import React from 'react';
import Banner from './Shared/Banner';
import Feature from './Shared/Feature';
import Service from './Shared/Service';
import Team from './Shared/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Feature></Feature>
        </div>
    );
};

export default Home;