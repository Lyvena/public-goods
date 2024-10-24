import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogIn } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="hover:opacity-90">
          <Logo />
        </Link>
        <div className="flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/categories" className="text-gray-600 hover:text-blue-600">Categories</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
            </ul>
          </nav>
          <Link to="/auth">
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};