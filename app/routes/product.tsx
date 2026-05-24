import type { Route } from "./+types/product";
import { Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
	const res = await fetch(`https://dummyjson.com/products/${params.id}`);
	return { product: await res.json() };
}

export default function ProductPage({ loaderData }: Route.ComponentProps) {
	const { product } = loaderData;
	return (
    <div className="fixed inset-0 z-50 h-dvh w-screen bg-gray-50 overflow-y-auto p-6">

      <div className="absolute top-6 right-6 md:top-12 md:right-12 z-10">
        <Link 
          to="/" 
          className="bg-[#EDE9E6] text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase hover:bg-[#BABF94] transition-colors">
          Close
        </Link>
      </div>

      {/* Main Container */}
      <main className="mx-auto flex flex-col-reverse md:flex-row min-h-[80vh] gap-12 md:gap-24 items-center md:items-stretch pt-12 md:pt-0">
        
        {/* Info Column */}
        <div className="rounded-2xl bg-[#EDE9E6] p-10 w-full md:w-[35%] flex flex-col justify-between">
          
          {/* Title and Add to Cart Button */}
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-1">
              Ltp Store
            </span>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {product.title}
            </h1>
            
            <button className="bg-[#EDE9E6] border border-black/20 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#BABF94] hover:border-none transition-colors duration-300 ">
              Add to Cart ↗
            </button>
          </div>

          {/* Product Description */}
          <div className="border-t border-black/20 w-full text-[11px] md:text-xs tracking-wide">
            <div className="border-b border-black/20 py-4 flex flex-col sm:flex-row items-start">
              <span className="w-full sm:w-1/3 font-bold uppercase text-gray-600 mb-1 sm:mb-0">Price Info</span>
              <span className="w-full sm:w-2/3 uppercase font-medium">€{product.price} — TAX INCLUDED</span>
            </div>

            <div className="border-b border-black/20 py-4 flex flex-col sm:flex-row items-start">
              <span className="w-full sm:w-1/3 font-bold uppercase text-gray-600 mb-1 sm:mb-0">Brand</span>
              <span className="w-full sm:w-2/3 uppercase font-medium">{product.brand}</span>
            </div>

            <div className="border-b border-black/20 py-4 flex flex-col sm:flex-row items-start">
              <span className="w-full sm:w-1/3 font-bold uppercase text-gray-600 mb-1 sm:mb-0">Description</span>
              <span className="w-full sm:w-2/3 font-medium text-gray-700 leading-relaxed normal-case">{product.description}</span>
            </div>

          </div>

        </div>

        {/* Right Column*/}
        {/* O flex-1 faz com que ela ocupe todo o espaço restante, e o flex center isola o produto */}
        <div className="flex-1 w-full flex items-center justify-center p-4 md:p-12">

          <div className="w-full max-w-md md:max-w-lg aspect-[3/4] flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{viewTransitionName: `product-img-${product.id}`}}
              className="max-h-[70vh] w-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>

      </main>

    </div>
  );
}