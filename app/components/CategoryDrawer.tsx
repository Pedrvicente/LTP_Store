import { Link } from "react-router";

export default function CategoryDrawer({ categories }: { categories: string[]}) {
	return (
		<div className="fixed left-0 top-1/2 z-50 -translate-y-1/2 hidden md:block">
			<div className="group flex -translate-x-56 items-center transition-transform duration-300 hover:translate-x-0">
				{/* Painel das categorias (escondido à esquerda) */}
				<div className="w-56 rounded-r-2xl bg-[#EDE9E6] p-6 shadow-lg">
					<h2 className="mb-3 font-bold">Categories</h2>
					<ul className="space-y-2 text-sm">
						<li><Link to="/" className="hover:text-[#BABF94]">All</Link></li>
						{categories.map((cat) => (
						<li key={cat}>
							<Link to={`?category=${cat}`} className="capitalize font-medium transition-all duration-300 hover:text-[#BABF94]">
							{cat.replace("-", " ")}
							</Link>
						</li>
						))}
					</ul>
				</div>

				{/* Pega/seta (sempre visível) */}
				<div className="cursor-pointer rounded-r-xl bg-[#EDE9E6] px-3 py-5 shadow-lg">→</div>
			</div>
    	</div>
	)
}