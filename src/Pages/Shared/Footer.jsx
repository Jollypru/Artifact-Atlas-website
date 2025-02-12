import React from 'react';

const Footer = () => {
    return (
        <footer id='contact' className="bg-[#c77d3a] text-white px-10 py-8 text-sm max-w-screen-xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className='text-xl'>Artifact Atlas</p>
          <p>Historyville, HV 45678</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@artifactatlas.com</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul>
            <li><a href="/" className="hover:text-purple-300">Home</a></li>
            <li><a href="/#about" className="hover:text-purple-300">About Us</a></li>
            <li><a href="/#featured" className="hover:text-purple-300">Featured Artifacts</a></li>
            <li><a href="/all-artifacts" className="hover:text-purple-300">All Artifacts</a></li>
            <li><a href="/contact" className="hover:text-purple-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
          <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-amber-700 px-4 py-2 rounded-r-md hover:bg-amber-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8">
        <p>© 2024 Artifact Atlas. All rights reserved.</p>
      </div>
    </footer>
    );
};

export default Footer;