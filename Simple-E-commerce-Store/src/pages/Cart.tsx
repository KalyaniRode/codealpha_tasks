
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/components/CartItem';
import { useCart } from '@/context/CartContext';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Cart: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      });
      clearCart();
      navigate('/');
      setIsProcessing(false);
    }, 1500);
  };
  
  if (items.length === 0) {
    return (
      <div className="container max-w-4xl py-16 text-center">
        <div className="mb-8">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
              <div>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <Button 
              className="w-full mt-6" 
              size="lg"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : (
                <>
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full mt-4"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
