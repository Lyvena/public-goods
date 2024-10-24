import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Newspaper, Globe, ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Newspaper className="h-16 w-16 text-blue-600" />
                <Globe className="h-8 w-8 text-green-500 absolute -bottom-2 -right-2" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">AI-Powered Public Goods News Curation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed about the latest developments in public goods, curated by AI for maximum relevance and impact.
            </p>
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;