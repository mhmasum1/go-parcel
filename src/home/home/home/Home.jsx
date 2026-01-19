import React from 'react';
import Banner from '../../banner/Banner';
import Works from '../../works/Works';
import Services from '../../../pages/Services';
import Brands from '../../../pages/Brands';
import About from '../../../pages/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
            <About></About>
        </div>
    );
};

export default Home;