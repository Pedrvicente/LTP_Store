import { useState } from "react";
import { Link } from "react-router";
import { useCart } from "../context/CartContext";


export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const { cartCount } = useCart();

	return (
		<>
      	<header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-black font-light">

			<div className="relative mx-auto w-full max-w-md">

				{/* Closed Menu */}
				<div className="flex items-center justify-between bg-[#FFD66B] px-6 py-4 transition-all duration-250">
					<span className="text-sm uppercase font-light">LTP Store</span>
					<Link to="/cart" className="font-light text-sm uppercase">Cart {cartCount}</Link>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="flex items-center gap-2 text-sm uppercase tracking-widest transition-all duration-300 hover:text-[#F5F5F5]"
						>
						{isOpen ? <>Menu <span>✕</span></> : <>Menu <span>＝</span></>}
					</button>
				</div>

				{/* Open Menu */}
				<div
					className={`absolute left-0 right-0 top-full overflow-hidden bg-[#FFD66B] transition-all duration-500 ease-in-out
					${isOpen ? "max-h-[80vh] opacity-100" :"max-h-0 opacity-0"}`}>
					<nav className="flex flex-col p-4 ">
						<Link to="/" onClick={() => setIsOpen(false)} className="border-b border-black/10 py-5 text-md font-light transition-all duration-300 hover:text-[#F5F5F5]">Home</Link>
						<Link to="#" onClick={() => setIsOpen(false)} className="border-b border-black/10 py-5 text-md font-light transition-all duration-300 hover:text-[#F5F5F5]">Shop</Link>
						<Link to="#" onClick={() => setIsOpen(false)} className="border-b border-black/10 py-5 text-md font-light transition-all duration-300 hover:text-[#F5F5F5]">About</Link>
						<Link to="#" onClick={() => setIsOpen(false)} className="py-5 text-md font-light transition-all duration-300 hover:text-[#F5F5F5]">Contact</Link>
					</nav>
				</div>

			</div>

		</header>
    </>
	);
}