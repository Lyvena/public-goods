import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, Bookmark } from 'lucide-react';

interface NewsCardProps {
  title: string;
  source: string;
  date: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ title, source, date }) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{source}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
        <Button variant="outline" size="sm">
          <Bookmark className="mr-2 h-4 w-4" /> Save
        </Button>
      </CardFooter>
    </Card>
  );
};