import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Newspaper, Search } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NewsGrid } from '@/components/NewsGrid';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const fetchNews = async () => {
  // TODO: Replace with actual API call
  return [
    { id: 1, title: 'AI Breakthrough in Climate Change Prediction', source: 'Tech Daily', date: '2023-04-15' },
    { id: 2, title: 'New Public Goods Project Launches in NYC', source: 'Urban Times', date: '2023-04-14' },
    { id: 3, title: 'Blockchain for Social Good: Latest Developments', source: 'Crypto News', date: '2023-04-13' },
  ];
};

const Index = () => {
  const { data: news, isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">AI-PGF News Curation</h1>
        <div className="flex items-center mb-8">
          <Input 
            type="text" 
            placeholder="Search news..." 
            className="flex-grow mr-2"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
        {isLoading ? (
          <p>Loading news...</p>
        ) : error ? (
          <p>Error loading news. Please try again later.</p>
        ) : (
          <NewsGrid news={news} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;