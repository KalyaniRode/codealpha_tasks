
import React from 'react';
import { Minus, Plus, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface CartItemProps {
  item: Product & { quantity: number };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b last:border-0 animate-slide-in">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex flex-grow flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium">{item.name}</h3>
          <p className="text-sm font-medium">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
              <span className="sr-only">Decrease quantity</span>
            </Button>
            
            <span className="w-6 text-center">{item.quantity}</span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
              <span className="sr-only">Increase quantity</span>
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            <Trash className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
