import React from 'react';

const Heritage = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <div class="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-gray-800">
                        Discover Our Heritage
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        Uncover the beauty and significance of ancient civilizations and their contributions to the modern world. From awe-inspiring monuments to intricate artifacts, explore the treasures of our shared history.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="p-6 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/b5KVyr3/Great-Pyramid-of-Giza.jpg"
                            alt="Ancient Egypt"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            Ancient Egypt
                        </h3>
                        <p className="text-gray-600">
                            Experience the grandeur of the Pharaohs and the mysteries of the pyramids.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="p-6 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/Px0gc88/Medieval-Castle-Parts.png"
                            alt="Medieval Era"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            Medieval Era
                        </h3>
                        <p className="text-gray-600">
                            Step into the age of knights, castles, and legendary tales of valor.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="p-6 bg-white shadow rounded-lg">
                        <img
                            src="https://i.ibb.co.com/hC0ggNs/michelangelo-pieta-1.jpg"
                            alt="Renaissance"
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            Renaissance
                        </h3>
                        <p className="text-gray-600">
                            Witness the rebirth of art, culture, and innovation during the Renaissance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
