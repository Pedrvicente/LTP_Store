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

export async function loader() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  return {products: data.products as Product[]};
}

export default function Home({loaderData}: Route.ComponentProps) {
  return (
    <main className="mx-auto px-6 py-8">
      <h1 className="text-xl font-bold">Our Products</h1>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {loaderData.products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}
