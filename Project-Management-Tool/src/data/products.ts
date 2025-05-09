
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Stylish Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    category: "bags",
    description: "A versatile backpack perfect for everyday use, with multiple compartments and durable material.",
    featured: true
  },
  {
    id: 2,
    name: "Classic Watch",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    category: "accessories",
    description: "Elegant timepiece with leather strap, suitable for both casual and formal occasions.",
    featured: true
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "electronics",
    description: "Premium sound quality with noise cancellation and long battery life.",
    featured: true
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "footwear",
    description: "Lightweight and comfortable shoes designed for runners, with excellent grip and support.",
    featured: false
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "clothing",
    description: "Soft, breathable cotton t-shirt available in multiple colors.",
    featured: false
  },
  {
    id: 6,
    name: "Smart Water Bottle",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    category: "accessories",
    description: "Track your water intake with this smart bottle that syncs with your phone.",
    featured: false
  },
  {
    id: 7,
    name: "Denim Jacket",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
    category: "clothing",
    description: "Classic denim jacket that never goes out of style, perfect for layering.",
    featured: false
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    category: "accessories",
    description: "Stylish sunglasses with UV protection for those sunny days.",
    featured: false
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "clothing", name: "Clothing" },
  { id: "accessories", name: "Accessories" },
  { id: "electronics", name: "Electronics" },
  { id: "footwear", name: "Footwear" },
  { id: "bags", name: "Bags" }
];
