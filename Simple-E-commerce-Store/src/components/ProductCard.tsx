
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  
  return (
    <Card className="overflow-hidden transition-all duration-300 product-card">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <p className="text-lg font-bold text-primary mt-1">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
