import { Link } from "react-router";
import { useSearchParams } from "react-router";

export default function CategoryDrawer({ categories }: { categories: string[]}) {
	const [searchParams, setSearchParams] = useSearchParams();

	function categoryURL(value: string) {
		const params = new URLSearchParams(searchParams);
		// if value is a category set value else delete category field
		if (value) {
			params.set("category", value);
		} else {
			params.delete("category");
		}
		params.set("page", "1");
		return `?${params.toString()}`;
	}

	return (
		<div className="fixed left-0 top-1/2 z-50 -translate-y-1/2 hidden md:block">
			<div className="group flex -translate-x-56 items-center transition-transform duration-300 hover:translate-x-0">
				{/* Painel das categorias (escondido à esquerda) */}
				<div className="w-56 bg-[#FFD66B] p-6 shadow-lg">
					<h2 className="mb-3 font-light">Categories</h2>
					<ul className="space-y-2 text-sm">
						<li><Link to={categoryURL("")} className="hover:text-[#F5F5F5]">All</Link></li>
						{categories.map((cat) => (
						<li key={cat}>
							<Link to={categoryURL(cat)} className="capitalize font-light transition-all duration-300 hover:text-[#F5F5F5]">
							{cat.replace("-", " ")}
							</Link>
						</li>
						))}
					</ul>
				</div>
				<div className="cursor-pointer bg-[#FFD66B] px-3 py-5 shadow-lg font-thin">→</div>
			</div>
    	</div>
	)
}