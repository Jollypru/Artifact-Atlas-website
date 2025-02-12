import Aos from 'aos';
import React, { useEffect } from 'react';

const WhyChooseUs = () => {

    useEffect(() => {
            Aos.init({ duration: 1000 }); 
        }, []);

    return (
        <section class="bg-gray-50 py-12 max-w-screen-xl">
            <div class="px-6 lg:px-20">
                <div class="text-center max-w-2xl mx-auto">
                    <h2 class="text-3xl lg:text-4xl font-bold">
                        Why Choose Artifact Atlas?
                    </h2>
                    <p class="mt-2">
                        Explore the past with a platform that combines expert knowledge,
                        engaging content, and a passion for preserving history.
                    </p>
                </div>
                <div class="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-200" data-aos="flip-left">
                        <div class="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.978 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.978-2.89a1 1 0 00-1.176 0l-3.978 2.89c-.785.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.978-2.89c-.783-.57-.381-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 text-center">
                            Expert Curated Content
                        </h3>
                        <p class="text-gray-600 mt-4 text-center">
                            Access high-quality, accurate information curated by historians,
                            archaeologists, and cultural experts.
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-200" data-aos="flip-up">
                        <div class="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12h6m2 6H7m12-6h-1.586a1 1 0 01-.707-.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 01-.707.293H5"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 text-center">
                            Interactive Learning Tools
                        </h3>
                        <p class="text-gray-600 mt-4 text-center">
                            Explore history through interactive maps, timelines, and virtual tours
                            of historical sites around the world.
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-200" data-aos="flip-right">
                        <div class="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 8h10M7 12h10m-9 4h9"
                                />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mt-6 text-center">
                            Community-Driven Insights
                        </h3>
                        <p class="text-gray-600 mt-4 text-center">
                            Join a vibrant community of history lovers to share insights and
                            connect with like-minded individuals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;