
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  
  return (
    <nav className="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          ShopEase
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="font-medium hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="outline" className="flex gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
              {itemCount > 0 && (
                <span className={cn(
                  "absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white",
                  "animate-fade-in"
                )}>
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
