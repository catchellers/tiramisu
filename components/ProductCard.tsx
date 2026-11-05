import Image from "next/image";
import Link from "next/link";
import { formatPrice, fromPrice, type Product } from "@/lib/products";

export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  const photo = product.photos[0];
  const many = product.options.length > 1;

  return (
    <Link
      href={`/banh/${product.slug}`}
      prefetch={true}
      className={`group relative flex h-full flex-col rounded-[2rem] border-2 border-bubble/60 bg-white p-3.5 transition duration-300 hover:-translate-y-1.5 hover:border-candy hover:shadow-[0_18px_40px_-18px_rgba(232,90,138,0.55)] ${className}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: product.bg }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 640px) 360px, 90vw"
          placeholder="blur"
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-berry shadow-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col px-1.5 pt-4">
        <h3 className="font-display text-xl font-bold leading-tight text-cocoa">{product.name}</h3>
        <p className="mt-1 text-sm text-cocoa-soft">{product.tagline}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-xl font-extrabold text-berry">
            {many && <span className="text-sm font-semibold text-cocoa-soft">từ </span>}
            {formatPrice(fromPrice(product))}
            {fromPrice(product) !== null && <span className="text-sm font-semibold text-cocoa-soft"> / {product.unit}</span>}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-petal text-lg text-berry transition group-hover:bg-berry group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
