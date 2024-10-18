import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About AI-PGF</h3>
            <p className="text-sm">AI-PGF is dedicated to curating and sharing news about public goods and their impact on society.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter for updates:</p>
            <input type="email" placeholder="Enter your email" className="w-full p-2 text-gray-800 rounded" />
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 AI-PGF News Curation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};