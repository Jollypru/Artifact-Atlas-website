import React from 'react';

const Testimonial = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container px-10 py-12 mx-auto">
                <div className="flex flex-col items-center gap-4">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center">
                        <h2 className="text-4xl font-bold">What People Are Saying</h2>
                        <p className="dark:text-gray-600">
                            Our platform has inspired countless history enthusiasts to dive deeper into the fascinating world of ancient artifacts and heritage preservation.
                        </p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-gray-200">
                                    <p>
                                        "Artifact Atlas is a treasure trove for history enthusiasts. I’ve learned so much about global heritage and the significance of preserving ancient artifacts!"
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://i.ibb.co.com/QJfFQp9/aiony-haust-3-TLl-97-HNJo-unsplash.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Emily Carter</p>
                                            <p className="text-sm dark:text-gray-600">History Enthusiast</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-violet-400">
                                    <p>
                                        "Thanks to Artifact Atlas, I’ve been able to connect with a community that values our shared history. The detailed resources have been invaluable in my studies."
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://i.ibb.co.com/Hh4WZw9/jurica-koletic-7-YVZYZe-ITc8-unsplash.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Liam Johnson</p>
                                            <p className="text-sm dark:text-gray-600">Archaeology Student</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-violet-400">
                                    <p>
                                        "As an educator, Artifact Atlas has provided me with engaging materials to teach my students about ancient cultures and their impact on our modern world. The interactive elements bring history to life."
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://i.ibb.co.com/BZPq551/rachel-mcdermott-0f-N7-Fxv1e-WA-unsplash.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Sophia Martinez</p>
                                            <p className="text-sm dark:text-gray-600">History Teacher</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-gray-200">
                                    <p>
                                        "Artifact Atlas is a window into the past. The platform’s dedication to uncovering and sharing the beauty of history is remarkable. Each artifact tells a story, connecting us with cultures from centuries ago."
                                    </p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src="https://i.ibb.co.com/FHHYZZf/jimmy-fermin-bqe0-J0b26-RQ-unsplash.jpg" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Michael Brown</p>
                                            <p className="text-sm dark:text-gray-600">Cultural Historian</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testimonial;
