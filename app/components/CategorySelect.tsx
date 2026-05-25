import { useSearchParams } from "react-router";

export default function CategorySelect({ categories }: { categories: string[]}) {
	const [searchParams, setSearchParams] = useSearchParams();
	const current_category = searchParams.get("category") ?? "";

	function changeCategory(value: string) {
		const params = new URLSearchParams(searchParams);
		// if value is a category set value else delete category field
		if (value) {
			params.set("category", value);
		} else {
			params.delete("category");
		}
		params.set("page", "1");
		setSearchParams(params);
	}
	return (
		<div className="relative w-full md:hidden">
			<select value={current_category} onChange={(e) => changeCategory(e.target.value)} className="w-full appearance-none bg-[#FFD66B] md:bg-white border border-[#FFD66B] text-black px-6 py-2.5 pr-12 text-xs font-light capitalize transition-all duration-300 hover:bg-[#FFD66B]">
				<option value="">All</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>{cat.replace("-", " ")}</option>
				))}
			</select>
			<span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">▾</span>
		</div>
	);
}