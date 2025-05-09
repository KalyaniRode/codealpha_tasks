
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center gap-2">
          <Video className="h-8 w-8 text-brand-indigo" />
          <span className="text-xl font-bold bg-gradient-to-r from-brand-indigo to-brand-purple bg-clip-text text-transparent">
            ConnectMeet
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          <div>
            <Link to="/meeting">
              <Button className="button-gradient">Start Meeting</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
