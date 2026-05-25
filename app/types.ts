import type { ReactNode } from "react";

export type Product = {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
	description: string;
}

export type CartItem = {
	product: Product;
	quantity: number;
}

export type CartContextType = {
	cartItems: CartItem[];
	cartCount: number;
	totalPrice: number;
	addToCart: (product: Product) => void;
	deleteFromCart: (product: Product) => void;
}