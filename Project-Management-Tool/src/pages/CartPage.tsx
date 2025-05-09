
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash, ShoppingCart, Home, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    toast.success("Order placed successfully! Thank you for shopping with us.");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <ShoppingCart className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products">
              <Button>
                <Home className="mr-2 h-4 w-4" />
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:flex-grow">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.product.id} className="py-6 flex md:items-center flex-col md:flex-row gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="md:ml-4 flex-grow">
                    <div className="flex justify-between">
                      <Link to={`/product/${item.product.id}`} className="text-lg font-medium text-gray-900 hover:text-blue-600">
                        {item.product.name}
                      </Link>
                      <p className="text-lg font-medium text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Category: {item.product.category}</p>
                    <p className="mt-1 text-sm text-gray-500">Price: ${item.product.price.toFixed(2)}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-3 text-gray-700">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-4 text-red-500"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-6">
              <Button variant="outline" onClick={clearCart} size="sm">
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-80 bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Shipping</p>
                <p className="text-sm font-medium text-gray-900">Free</p>
              </div>
              
              <div className="flex justify-between border-t border-gray-200 pt-4">
                <p className="text-base font-medium text-gray-900">Total</p>
                <p className="text-base font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6" 
              onClick={handleCheckout}
            >
              Checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="mt-6 text-center">
              <Link to="/products" className="text-sm text-blue-600 hover:text-blue-800">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
