
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Video, Users, Share2, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 transform translate-x-1/4 -translate-y-1/4">
          <div className="w-[500px] h-[500px] rounded-full bg-brand-purple/20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 transform -translate-x-1/4 translate-y-1/4">
          <div className="w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-3xl"></div>
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Connect, Collaborate,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo to-brand-purple"> Communicate</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl">
              Experience high-quality video meetings with advanced collaboration tools that make connecting with others seamless and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/meeting">
                <Button size="lg" className="button-gradient">
                  Start a Meeting <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline">
                  Join a Meeting
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Video, text: "HD Video" },
                { icon: Users, text: "Group Calls" },
                { icon: Share2, text: "Screen Sharing" },
                { icon: MessageSquare, text: "Chat" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-indigo/10 text-brand-indigo">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-2xl transform -rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-brand-indigo" />
                    <span className="text-sm font-medium">ConnectMeet</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                    <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
                    <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                  </div>
                </div>
                <div className="p-4 aspect-video bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center">
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center"
                      >
                        <Users className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
                    {[
                      { icon: Video, color: "text-green-500" },
                      { icon: Share2, color: "text-blue-500" },
                      { icon: MessageSquare, color: "text-purple-500" }
                    ].map((item, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center ${item.color} bg-gray-100 dark:bg-gray-700`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
