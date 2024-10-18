import React from 'react';
import { Newspaper } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Newspaper className="h-8 w-8 text-blue-600 mr-2" />
          <span className="text-xl font-bold">AI-PGF News</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Categories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};