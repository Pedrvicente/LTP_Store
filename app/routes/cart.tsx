import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export default function CartPage() {
  const { cartItems } = useCart();
  const { totalPrice } = useCart();
  const { addToCart } = useCart();
  const { deleteFromCart } = useCart();

  return (
    <div className="min-h-screen w-full bg-white pt-32 p-6 flex flex-col items-center">
		<div className="w-full bg-[#F5F5F5] p-6 text-black">
			<h1 className="text-2xl font-bold uppercase tracking-wider mb-6 border-b border-black/20 pb-2">Your Cart</h1>

			{/* If cart is empty */}
			{cartItems.length === 0 ? (
				<div className="py-8 text-center text-sm font-light uppercase">
					Your cart is empty.{" "}
					<Link to="/" className="underline font-normal">Shop now</Link>
				</div>
			) : (
			// If cart has items 
			<div className="flex flex-col gap-4">
				{cartItems.map((item) => (
				<div key={item.product.id} className="w-full flex flex-col md:flex-row items-start md:items-center gap-3 justify-between border-b border-black/10 pb-4 text-sm">
					<div className="w-full md:w-1/4 flex items-normal md:items-center gap-3">
						<img src={item.product.thumbnail} alt={item.product.title} className="h-20 w-20 object-contain"/>
						<div className="flex flex-row md:flex-col justify-between w-3/4">
							<h3 className="w-3/4 font-medium uppercase">{item.product.title}</h3>
							<p className="font-light text-xs">€{item.product.price}</p>
						</div>
					</div>
					<div className="w-full md:w-2/4 flex items-center justify-between">
						<p className="font-light">€{item.product.price * item.quantity}</p>
						<div className="flex gap-3 items-center">
							<button onClick={() => deleteFromCart(item.product)} className="h-10 w-10 border border-[#FFD66B] bg-white font-thin transition-all duration-300 hover:bg-[#FFD66B]">-</button>
							<p className="font-light text-sm">{item.quantity}</p>
							<button onClick={() => addToCart(item.product)} className="h-10 w-10 border border-[#FFD66B] bg-white font-thin transition-all duration-300 hover:bg-[#FFD66B]">+</button>
						</div>
					</div>
				</div>
				))}

				<div className="w-full pt-4 flex justify-between items-center border-t border-black/10 font-bold uppercase">
					<p>Total</p>
					<p>€{totalPrice}</p>
				</div>

				<button className="w-full md:w-1/3 bg-[#FFD66B] md:bg-[#FFD66B] py-3 mt-6 text-xs uppercase hover:bg-white transition-all duration-300">Checkout</button>
			</div>
			)}
		</div>
    </div>
  );
}