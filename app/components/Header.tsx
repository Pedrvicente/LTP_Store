import {Link} from "react-router";

export default function Header() {
	return (
		<header className="flex items-center justify-between px-8 py-5">
			<Link className="text-lg font-bold" to="/">
				Online Store
			</Link>
			<nav className="flex gap-8 bg-white shadow-md rounded-full px-8 py-6 text-sm">
				<Link to="/">Home</Link>
				<Link to="#">Shop</Link>
				<Link to="#">About</Link>
				<Link to="#">Contacts</Link>
				<Link to="#">Blog</Link>
			</nav>
			<div className="flex gap-3">
				<button className="rounded-full bg-[#0046FE] text-white px-6 py-2 hover:bg-[#0038CC] transition">Search</button>
				<button className="rounded-full bg-[#0046FE] text-white px-6 py-2 hover:bg-[#0038CC] transition">Account</button>
				<Link className="rounded-full bg-[#0046FE] text-white px-6 py-2 hover:bg-[#0038CC] transition" to="/cart">Cart</Link>
			</div>
		</header>
	);
}