
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ProjectHub. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="underline underline-offset-4 hover:text-primary">Terms</a>
          <a href="#" className="underline underline-offset-4 hover:text-primary">Privacy</a>
          <a href="#" className="underline underline-offset-4 hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
