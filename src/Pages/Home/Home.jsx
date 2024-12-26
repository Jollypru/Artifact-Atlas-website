import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import { Helmet } from 'react-helmet';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Artifact Atlas</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;