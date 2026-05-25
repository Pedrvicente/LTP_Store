import { Link } from "react-router";
import type { Product } from "../types";

export default function ProductCard({ product }: { product: Product }) {
	return (
	<Link to={`/products/${product.id}`} viewTransition className="group block flex flex-col transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F5F5] transition-shadow duration-300 group-hover:shadow-sm">
        {/* a fotografia */}
        <div className="flex h-full w-full items-center justify-center p-6">
			<img
				src={product.thumbnail}
				alt={product.title}
				className="max-h-full max-w-full object-contain"
			/>
        </div>
      </div>
	  <div className="mt-3 flex flex-col gap-1 pl-3">
		<h3 className="font-light text-black text-xs">{product.title}</h3>
		<p className="text-xs text-black/60">€{product.price}</p>
	  </div>
    </Link>
	)
}