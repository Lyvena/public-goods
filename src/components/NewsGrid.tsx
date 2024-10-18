import React from 'react';
import { NewsCard } from './NewsCard';

interface News {
  id: number;
  title: string;
  source: string;
  date: string;
}

interface NewsGridProps {
  news: News[];
}

export const NewsGrid: React.FC<NewsGridProps> = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item) => (
        <NewsCard key={item.id} title={item.title} source={item.source} date={item.date} />
      ))}
    </div>
  );
};