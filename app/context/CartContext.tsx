import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartContextType, CartItem, Product } from "../types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productToAdd: Product) => {
	const copyCart = [...cartItems];
	const existing_item = copyCart.find((item) => item.product.id === productToAdd.id);

	if (existing_item) {
		existing_item.quantity += 1;
	} else {
		copyCart.push({product: productToAdd, quantity: 1});
	}
	setCartItems(copyCart);
  };

  const deleteFromCart = (productToReduce: Product) => {
	const copyCart = [...cartItems];
	const existing_item = copyCart.find((item) => item.product.id === productToReduce.id);

	if (existing_item) {
		if (existing_item.quantity > 1) {
			existing_item.quantity -= 1;
		} else {
			const index = copyCart.findIndex((item) => item.product.id === productToReduce.id);
        	copyCart.splice(index, 1);
		}
	}
	setCartItems(copyCart);
  };

  let cartCount = 0;
  cartItems.forEach(item => {
	cartCount += item.quantity;
  });

  let totalPrice = 0;
  cartItems.forEach(item => {
	totalPrice += item.quantity * item.product.price;
  })

  return (
    <CartContext.Provider value={{ cartItems, cartCount, totalPrice, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
}