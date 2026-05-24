import type { Route } from "./+types/home";
import { Link } from "react-router";
import type { Product } from "../types"
import  Header  from "../components/Header"

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
    <main>
      <h1>Products</h1>
      <ul>
        {loaderData.products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>
              {p.title} — {p.price}€
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
