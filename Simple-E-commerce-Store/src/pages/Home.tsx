
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero section */}
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to ShopEase
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your one-stop shop for premium electronics and accessories.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/products">
              <Button size="lg">Shop Now</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Featured products section */}
      <div className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
          <Link to="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Promo section */}
      <div className="my-16 rounded-2xl bg-accent p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Special Discount</h2>
            <p className="mt-2 max-w-md text-muted-foreground">
              Sign up for our newsletter and get 10% off your first order.
            </p>
          </div>
          <Link to="/products">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
