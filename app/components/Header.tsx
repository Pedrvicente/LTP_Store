import { useState } from "react";
import {Link} from "react-router";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
      	<header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent text-black">

			<div className="relative mx-auto w-full max-w-md">

				{/* Closed Menu */}
				<div className={`flex items-center justify-between ${isOpen ? "rounded-t-lg rounded-b-none" : "rounded-lg"} bg-[#EDE9E6] px-6 py-4 transition-all duration-250`}>
					<span className="text-sm uppercase font-medium">LTP Store</span>
					<Link to="/cart" className="font-medium text-sm uppercase">Cart (0)</Link>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="flex items-center gap-2 text-sm uppercase tracking-widest transition-all duration-300 hover:text-[#BABF94]"
						>
						{isOpen ? <>Menu <span>✕</span></> : <>Menu <span>＝</span></>}
					</button>
				</div>

				{/* Open Menu */}
				<div
					className={`absolute left-0 right-0 top-full overflow-hidden rounded-b-lg bg-[#EDE9E6] transition-all duration-500 ease-in-out
					${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
					<nav className="flex flex-col p-4">
					<Link to="/" onClick={() => setIsOpen(false)} className="border-b border-black/10 py-5 text-xl font-medium transition-all duration-300 hover:text-[#BABF94]">Home</Link>
					<Link to="#" onClick={() => setIsOpen(false)} className="border-b border-black/10 py-5 text-xl font-medium transition-all duration-300 hover:text-[#BABF94]">Shop</Link>
					<Link to="#" onClick={() => setIsOpen(false)} className="border-b border-black/10 py-5 text-xl font-medium transition-all duration-300 hover:text-[#BABF94]">About</Link>
					<Link to="#" onClick={() => setIsOpen(false)} className="py-5 text-xl font-medium transition-all duration-300 hover:text-[#BABF94]">Contact</Link>
					</nav>
				</div>

			</div>

		</header>
    </>
	);
}