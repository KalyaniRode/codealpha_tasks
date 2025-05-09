
import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Video className="h-6 w-6 text-brand-indigo" />
              <span className="text-lg font-bold bg-gradient-to-r from-brand-indigo to-brand-purple bg-clip-text text-transparent">
                ConnectMeet
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Making virtual meetings simple, reliable, and secure for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Download', 'Updates'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {['About', 'Careers', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {['Terms', 'Privacy', 'Cookies', 'Licenses'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ConnectMeet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
