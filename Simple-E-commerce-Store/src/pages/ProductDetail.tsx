
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Button onClick={() => navigate('/products')}>
          Return to Products
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <Button 
        variant="ghost" 
        className="mb-6 pl-0" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-bold text-primary mt-2">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mt-8">
            <Button 
              size="lg"
              onClick={() => addItem(product)}
              className="w-full sm:w-auto"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
