import { Category } from "./Categories";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  slug?: string;
  creationAt?: string | Date;
  updatedAt?: string | Date;
}

export interface CartProduct extends Product {
  quantity: number;
}
