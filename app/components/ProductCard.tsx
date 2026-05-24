import { Link } from "react-router";
import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
	return (
	<Link to={`/products/${product.id}`} viewTransition className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50">
        {/* a fotografia */}
        <div className="flex h-full w-full items-center justify-center p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="font-semibold text-white">{product.title}</h3>
          <p className="text-sm text-white/90">
            €{product.price}
          </p>
        </div>
      </div>
    </Link>
	)
}