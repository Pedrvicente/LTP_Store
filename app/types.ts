import type { ReactNode } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

export type CartItem = Product & {
	quantity: number;
}

export type CartContextType = {
  cartCount: number;
  incrementCart: () => void;
}