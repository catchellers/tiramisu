import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

function Thumb({ product }: { product: Product }) {
  return (
    <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-2xl" style={{ backgroundColor: product.bg }}>
      <Image src={product.photos[0].src} alt="" fill sizes="56px" className="object-cover" />
    </span>
  );
}

/** Thẻ "Hg tự review" — lời tiệm kể về món của mình, ký tên Hg. */
export default function OwnerNote({ product, link = true, className = "" }: { product: Product; link?: boolean; className?: string }) {
  return (
    <article className={`relative rounded-3xl bg-white p-6 shadow-[0_10px_30px_-14px_rgba(232,90,138,0.35)] ${className}`}>
      <span className="absolute -top-3 left-8 h-6 w-16 rotate-[-6deg] bg-bubble/80" aria-hidden="true" />
      <header className="flex items-center gap-3">
        <Thumb product={product} />
        <div>
          <h3 className="font-display text-xl font-bold leading-tight text-cocoa">{product.name}</h3>
          <p className="text-xs font-semibold text-candy">Hg tự review 🙈</p>
        </div>
      </header>
      <div className="mt-4 space-y-3 leading-relaxed text-cocoa">
        {product.ownerNote.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <footer className="mt-4 flex items-center justify-between">
        <span className="font-display text-lg font-bold text-berry">– Hg 💗</span>
        {link && (
          <Link href={`/banh/${product.slug}`} className="text-sm font-bold text-cocoa-soft hover:text-berry">
            Xem bánh →
          </Link>
        )}
      </footer>
    </article>
  );
}
