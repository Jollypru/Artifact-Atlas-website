import React from 'react';

const Heritage = () => {
    return (
        <section className="py-8 bg-gray-50 max-w-screen-xl mx-auto">
            <div className="container mx-auto px-6 text-center">
                <div class="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-2">
                        Discover Our Heritage
                    </h2>
                    <p className="mb-8">
                        Uncover the beauty and significance of ancient civilizations and their contributions to the modern world.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-5">
                    {/* Card 1 */}
                    <div className="p-3 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/b5KVyr3/Great-Pyramid-of-Giza.jpg"
                            alt="Ancient Egypt"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">
                            Ancient Egypt
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Experience the grandeur of the Pharaohs and the mysteries of the pyramids.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="p-3 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/Px0gc88/Medieval-Castle-Parts.png"
                            alt="Medieval Era"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">
                            Medieval Era
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Step into the age of knights, castles, and legendary tales of valor.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="p-3 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/hC0ggNs/michelangelo-pieta-1.jpg"
                            alt="Renaissance"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">
                            Renaissance
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Witness the rebirth of art, culture, and innovation during the Renaissance.
                        </p>
                    </div>
                    <div className="p-3 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/mHYQDRR/Philipp-Jakob-Loutherbourg-d-J-002.jpg"
                            alt="Industrial Revolution"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-700 mb-2">
                            Industrial Revolution
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Explore the transformative era of industry, technology, and innovation that reshaped the modern world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
