import type { Route } from "./+types/home";
import { Link } from "react-router";
import type { Product } from "../types"
import ProductCard from "../components/ProductCard";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Ltp Store"},
    {name: "description", content: "Online Store"},
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") ?? "1");
  const limit_per_page = 12;
  const skip = ((page - 1) * limit_per_page);
  const res = await fetch(`https://dummyjson.com/products?limit=${limit_per_page}&skip=${skip}`);
  const data = await res.json();
  const total_pages = Math.ceil(data.total / limit_per_page);
  return {products: data.products as Product[], page_number: page, total_p: total_pages};
}

export default function Home({loaderData}: Route.ComponentProps) {
  const page = loaderData.page_number;
  const next_page = page + 1;
  return (
    <main className="mx-auto px-6 py-8 mt-30">
      <h1 className="text-7xl font-bold mb-12">Our Products</h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {loaderData.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Link to={`?page=${next_page}`} className="group fixed right-6 flex bottom-10 z-60 items-center justify-center my-auto mt-12 px-6 py-4 w-20 rounded-full bg-[#EDE9E6] font-bold">
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </Link>
    </main>
  )
}
