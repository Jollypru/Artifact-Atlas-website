import React from 'react';
import Banner from './Banner';
import Featured from './Featured';
import { Helmet } from 'react-helmet';
import Testimonial from './Testimonial';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Artifact Atlas</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;