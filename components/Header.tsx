import Link from "next/link";
import Logo from "./Logo";
import { shop } from "@/lib/products";

const links = [
  { href: "/#menu", label: "Menu" },
  { href: "/#story", label: "Câu chuyện" },
  { href: "/#danh-gia", label: "Đánh giá" },
  { href: "/#contact", label: "Liên hệ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bubble/50 bg-blush/95 shadow-[0_2px_12px_-6px_rgba(232,90,138,0.25)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${shop.name} - Trang chủ`}>
          <Logo className="h-10 w-10" />
          <span className="font-display text-2xl font-extrabold leading-none tracking-tight text-cocoa">
            Tiramisu <span className="text-berry">Hg</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-cocoa-soft transition hover:bg-petal hover:text-berry"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={shop.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-berry px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_0_#c23d6c] transition hover:-translate-y-0.5 hover:shadow-[0_6px_0_#c23d6c] active:translate-y-0.5 active:shadow-[0_2px_0_#c23d6c]"
        >
          Đặt qua Zalo 💬
        </a>
      </div>
    </header>
  );
}
