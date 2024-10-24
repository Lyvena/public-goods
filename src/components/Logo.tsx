import React from 'react';
import { Newspaper, Globe } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Newspaper className="h-8 w-8 text-blue-600" />
        <Globe className="h-4 w-4 text-green-500 absolute -bottom-1 -right-1" />
      </div>
      <span className="text-xl font-bold">AI-PGF News</span>
    </div>
  );
};