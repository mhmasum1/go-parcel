import React from 'react';
import Banner from '../../banner/Banner';
import Works from '../../works/Works';
import Services from '../../../pages/Services';
import Brands from '../../../pages/Brands';
import About from '../../../pages/About';
import Reviews from '../../../pages/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json());
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Works></Works>
            <Services></Services>
            <Brands></Brands>
            <About></About>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
                </div>
    );
};

export default Home;