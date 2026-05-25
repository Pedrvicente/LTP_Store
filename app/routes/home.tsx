import type { Route } from "./+types/home";
import { Link } from "react-router";
import type { Product } from "../types"
import ProductCard from "../components/ProductCard";
import CategoryDrawer from "~/components/CategoryDrawer";
import CategorySelect from "~/components/CategorySelect";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Ltp Store"},
    {name: "description", content: "Online Store"},
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") ?? "1");
  const category = url.searchParams.get("category") ?? "";
  const base = category ? `https://dummyjson.com/products/category/${category}` : "https://dummyjson.com/products";
  const limit_per_page = 12;
  const skip = ((page - 1) * limit_per_page);
  const res = await fetch(`${base}?limit=${limit_per_page}&skip=${skip}`);
  const data = await res.json();
  const res_categories = await fetch("https://dummyjson.com/products/category-list");
  const categories_list = await res_categories.json();
  const total_pages = Math.ceil(data.total / limit_per_page);
  return {products: data.products as Product[], page_number: page, total_p: total_pages, categories_list};
}

export default function Home({loaderData}: Route.ComponentProps) {
  const page = loaderData.page_number;
  const total_pages = loaderData.total_p;
  const categories_list = loaderData.categories_list;
  const next_page = page + 1;
  const prev_page = page - 1;

  return (
    <main className="mx-auto px-6 py-8 mt-30">

      <div className="mb-12 flex flex-col">
        <h1 className="mb-5 text-7xl font-bold">Our Products</h1>
        <CategorySelect categories={categories_list}/>
      </div>
  
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {loaderData.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <CategoryDrawer categories={categories_list}/>

      <div className="flex justify-between">
        {page > 1 && (
          <Link to={`?page=${prev_page}`} className="group flex bottom-10 z-60 items-center justify-center my-auto mt-12 h-15 w-15 rounded-full bg-[#EDE9E6] font-bold hover:bg-[#BABF94]">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          </Link>
        )}
        {page < total_pages && (
          <Link to={`?page=${next_page}`} className="group flex bottom-10 z-60 items-center justify-center my-auto mt-12 h-15 w-15 rounded-full bg-[#EDE9E6] font-bold hover:bg-[#BABF94]">
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        )}
      </div>
    </main>
  )
}
