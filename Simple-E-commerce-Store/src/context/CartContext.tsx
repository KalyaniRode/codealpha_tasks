
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';
import { toast } from '@/components/ui/use-toast';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: 'Item quantity updated',
          description: `${product.name} quantity increased`,
        });
        
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        toast({
          title: 'Item added to cart',
          description: `${product.name} has been added to your cart`,
        });
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeItem = (productId: number) => {
    const product = items.find(item => item.id === productId);
    if (product) {
      setItems(prevItems => prevItems.filter(item => item.id !== productId));
      
      toast({
        title: 'Item removed',
        description: `${product.name} has been removed from your cart`,
      });
    }
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: 'Cart cleared',
      description: 'All items have been removed from your cart',
    });
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
