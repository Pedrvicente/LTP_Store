import { useSearchParams } from "react-router";

export default function SortSelect() {
	const [searchParams, setSearchParams] = useSearchParams();
	const current_sort = searchParams.get("sort") ?? "";

	function changeSort(value: string) {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("sort", value);
		} else {
			params.delete("sort");
		}
		params.set("page", "1");
		setSearchParams(params);
	}

	return (
		<div className="relative w-full md:w-fit">
			<select value={current_sort} onChange={(e) => changeSort(e.target.value)} className="w-full appearance-none bg-[#EDE9E6] text-black px-6 py-2.5 pr-12 rounded-full text-xs font-bold capitalize">
				<option value="">Sort</option>
				<option value="price-asc">Ascending Price</option>
				<option value="price-desc">Descending Price</option>
				<option value="title-asc">A-Z</option>
				<option value="title-desc">Z-A</option>
			</select>
			<span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">▾</span>
		</div>
	)
}