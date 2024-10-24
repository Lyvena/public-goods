import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Key, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your OpenAI API key has been saved successfully.",
    });
  };

  React.useEffect(() => {
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <SettingsIcon className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>
          
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">AI Configuration</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="apiKey" className="font-medium">
                  OpenAI API Key
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-grow">
                    <Key className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="sk-..."
                      className="pl-10"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                  </div>
                  <Button onClick={handleSaveApiKey}>
                    <Save className="mr-2 h-4 w-4" /> Save Key
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Your API key is stored locally and never sent to our servers.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;