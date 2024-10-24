import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Newspaper, Globe, ArrowRight, Brain, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <Newspaper className="h-20 w-20 text-blue-600" />
                <Globe className="h-10 w-10 text-green-500 absolute -bottom-2 -right-2" />
              </div>
            </motion.div>
            <motion.h1 
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              AI-Powered Public Goods News Curation
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Stay informed about the latest developments in public goods, curated by AI for maximum relevance and impact.
            </motion.p>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8 mb-12"
            >
              <div className="p-6 rounded-lg bg-white shadow-lg">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
                <p className="text-gray-600">Advanced algorithms analyze and curate news specifically tailored to public goods initiatives.</p>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-lg">
                <Cpu className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Filtering</h3>
                <p className="text-gray-600">Intelligent filtering ensures you only see the most relevant and impactful news.</p>
              </div>
              <div className="p-6 rounded-lg bg-white shadow-lg">
                <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Feed</h3>
                <p className="text-gray-600">Your news feed adapts to your interests and reading patterns over time.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/auth">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                  Get Started <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;