import Link from "next/link";
import Logo from "./Logo";
import { formatPrice, fromPrice, products, shop } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-berry text-white">
      <div className="wavy-top absolute -top-3.5 left-0 h-4 w-full bg-berry" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <Logo className="h-11 w-11" />
            <span className="font-display text-2xl font-extrabold">Tiramisu Hg</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">
            Tiệm bánh nhà làm nhỏ xinh ở Quận 7. Tiramisu, panna cotta và flan được làm tay theo từng
            mẻ nhỏ, gói ghém cẩn thận gửi đến bạn.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold">Menu</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {products.map((p) => (
              <li key={p.slug} className="flex justify-between gap-4">
                <Link href={`/banh/${p.slug}`} className="hover:text-white hover:underline">
                  {p.name}
                </Link>
                <span>{formatPrice(fromPrice(p))}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold">Liên hệ</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            <li>📍 {shop.area}</li>
            <li>
              📞 <a href={shop.tel} className="hover:text-white hover:underline">{shop.phone}</a> (Zalo)
            </li>
            <li>
              💗 Facebook:{" "}
              <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/40 underline-offset-4 hover:text-white">
                {shop.facebook}
              </a>
            </li>
            <li>🛵 {shop.shipping}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-xs text-white/70">
        © 2026 Tiramisu Hg · H.G House · Làm bằng 💗 và rất nhiều mascarpone
      </div>
    </footer>
  );
}
