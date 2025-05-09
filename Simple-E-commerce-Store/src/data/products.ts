
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Laptop",
    price: 999.99,
    description: "High performance laptop with latest generation processor, 16GB RAM and 512GB SSD storage.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop",
    category: "electronics",
    featured: true
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 149.99,
    description: "Noise cancelling wireless headphones with 30 hour battery life and premium sound quality.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
    category: "electronics",
    featured: true
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    description: "Track your fitness, receive notifications, and more with this premium smart watch.",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop",
    category: "electronics",
    featured: true
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable speaker with premium sound and 12 hour battery life.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=400&auto=format&fit=crop",
    category: "electronics",
    featured: false
  },
  {
    id: 5,
    name: "Smartphone",
    price: 799.99,
    description: "Latest model smartphone with high resolution camera and long battery life.",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=400&auto=format&fit=crop",
    category: "electronics",
    featured: true
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 449.99,
    description: "High resolution digital camera for professional photography.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop",
    category: "electronics",
    featured: false
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 29.99,
    description: "Ergonomic wireless mouse with long battery life.",
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=400&auto=format&fit=crop",
    category: "accessories",
    featured: false
  },
  {
    id: 8,
    name: "Laptop Backpack",
    price: 59.99,
    description: "Water resistant backpack with laptop compartment and multiple storage pockets.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
    category: "accessories",
    featured: false
  }
];
