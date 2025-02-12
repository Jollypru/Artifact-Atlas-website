import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
    const slides = [
        {
            title: 'Discover Ancient Artifacts',
            description: 'Explore the treasures of the past with our collection.',
            image: 'https://i.ibb.co.com/3YSnVYTW/00xp-machupicchu-super-Jumbo.jpg',
            welcomeText: 'Welcome to Artifact Atlas'
        },
        {
            title: 'Preserve History',
            description: 'Dive into the stories behind historical relics.',
            image: 'https://i.ibb.co.com/1fZqKFw/images-1.jpg',
        },
        {
            title: 'Unveil the Mysteries',
            description: 'Join us on a journey to uncover ancient secrets.',
            image: 'https://i.ibb.co.com/FYxZH4v/techniques-developed-t.jpg',
        },
    ];

    return (
        <div id='about' className='max-w-screen-xl mx-auto'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='text-center  mx-auto relative'>
                                <img className='h-[200px] md:h-[300px] lg:h-[480px] w-full' src={slide.image} alt="" />
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50'>
                                   
                                    <h3 className='text-2xl md:text-4xl lg:text-5xl font-bold'>{slide.title}</h3>
                                    <p className='px-5 text-sm'>{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Banner;