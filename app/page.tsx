import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import Polaroid from "@/components/Polaroid";
import ProductCard from "@/components/ProductCard";
import OwnerNote from "@/components/OwnerNote";
import Reviews from "@/components/Reviews";
import Sparkle from "@/components/Sparkle";
import TiramisuArt from "@/components/TiramisuArt";
import { gallery, products, shop } from "@/lib/products";
import ingredients from "@/public/images/ingredients.jpg";
import kitchenFridge from "@/public/images/kitchen-fridge.jpg";
import { pageUrl } from "@/lib/seo";

export const metadata: Metadata = pageUrl("/");

const features = [
  { icon: "🧀", title: "Mascarpone Tatua", text: "Kem mascarpone kiểu Ý từ New Zealand, béo mịn tan ngay đầu lưỡi." },
  { icon: "🍪", title: "Bánh Vicenzovo Ý", text: "Ladyfinger nhập khẩu, thấm cà phê vừa đủ mà không bị nhão." },
  { icon: "🏠", title: "Nhà làm mẻ nhỏ", text: "Làm tay từng hộp, để lạnh cho kem set lại rồi mới giao." },
  { icon: "🛵", title: "Freeship gần nhà", text: "Dưới 3km freeship. Xa hơn chỉ cần mua từ 2 món." },
];

const steps = [
  { n: "01", title: "Nhúng bánh", text: "Ladyfinger nhúng nhanh qua cà phê để thấm vừa." },
  { n: "02", title: "Đánh kem", text: "Mascarpone cùng whipping cream đánh bông mềm mịn." },
  { n: "03", title: "Xếp từng lớp", text: "Bắt kem bằng túi bắt, xếp xen kẽ thật đều tay." },
  { n: "04", title: "Phủ cacao", text: "Rây cacao thật dày, cắm nửa bánh Oreo rồi để lạnh." },
];

export default function Home() {
  const signature = products[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="dotted-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div data-parallax="0.25" className="absolute -right-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,194,212,0.55)_0%,rgba(255,194,212,0)_70%)]" aria-hidden="true" />
        <div data-parallax="-0.15" className="absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,228,236,1)_0%,rgba(255,228,236,0)_70%)]" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 md:grid-cols-2 md:pt-16">
          <div>
            <span className="hero-in inline-flex items-center gap-2 rounded-full border-2 border-bubble bg-white px-4 py-1.5 text-sm font-bold text-berry">
              <span className="animate-wiggle inline-block">🧋</span> Mới: Lục trà sữa xoài
            </span>
            <h1 className="hero-in hero-d1 mt-6 font-display text-5xl font-extrabold leading-[1.05] text-cocoa sm:text-6xl lg:text-7xl">
              Ngọt ngào
              <br />
              từng lớp{" "}
              <span className="relative inline-block text-berry">
                kem mây
                <svg viewBox="0 0 200 20" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                  <path d="M2 14 Q50 2 100 12 T198 8" stroke="#FFC2D4" strokeWidth="7" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="hero-in hero-d2 mt-6 max-w-md text-lg leading-relaxed text-cocoa-soft">
              <strong className="text-cocoa">Tiramisu Hg</strong> là tiệm bánh nhà làm nho nhỏ ở Tân Hưng, Quận 7 —
              nơi mỗi hộp tiramisu đều được xếp lớp bằng tay và phủ thật nhiều yêu thương 💕
            </p>
            <div className="hero-in hero-d3 mt-8 flex flex-wrap gap-3">
              <Link
                href="#menu"
                className="rounded-full bg-berry px-7 py-3.5 font-bold text-white shadow-[0_5px_0_#c23d6c] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#c23d6c] active:translate-y-1 active:shadow-[0_1px_0_#c23d6c]"
              >
                Xem menu bánh
              </Link>
              <Link
                href={`/banh/${signature.slug}`}
                className="rounded-full border-2 border-cocoa/15 bg-white px-7 py-3.5 font-bold text-cocoa transition hover:border-candy hover:text-berry"
              >
                Tiramisu 45k →
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["45k", "một hộp tiramisu"],
                ["< 3km", "freeship tận nơi"],
                ["Q.7", "Phường Tân Hưng"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl font-extrabold text-berry">{v}</dt>
                  <dd className="text-xs font-semibold text-cocoa-soft">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Ảnh thật + linh vật */}
          <div className="hero-pop relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-bubble to-candy" aria-hidden="true" />
            <div className="absolute inset-10 rounded-full border-4 border-dashed border-white/70" aria-hidden="true" />
            <Polaroid
              photo={gallery[0]}
              aspect="aspect-[5/4]"
              preload
              sizes="(min-width: 768px) 340px, 75vw"
              className="absolute left-[4%] top-[6%] w-[74%] -rotate-6"
            />
            <Polaroid
              photo={gallery[2]}
              tape={false}
              parallax={-0.06}
              sizes="(min-width: 768px) 180px, 40vw"
              className="absolute bottom-[2%] right-0 w-[42%] rotate-[7deg] p-2"
            />
            <TiramisuArt id="hero" parallax={-0.12} className="animate-float absolute -bottom-4 -left-8 z-20 w-[36%]" />
            <Sparkle parallax={0.2} className="animate-twinkle absolute -left-2 top-4 h-8 w-8" />
            <Sparkle parallax={-0.2} className="animate-twinkle absolute right-2 top-[38%] h-6 w-6 [animation-delay:0.8s]" color="#E85A8A" />
            <Sparkle parallax={0.3} className="animate-twinkle absolute right-[30%] -top-2 h-5 w-5 [animation-delay:1.4s]" color="#FFC94D" />
            <div className="absolute -right-2 top-[4%] z-20 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full bg-berry text-white shadow-lg">
              <span className="font-display text-2xl font-extrabold leading-none">45k</span>
              <span className="text-[10px] font-bold">/ hộp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y-2 border-candy bg-candy py-3 text-white" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-xl font-bold">
          {Array.from({ length: 4 }).flatMap((_, k) =>
            [...products.map((p) => p.name), "Freeship dưới 3km", "Nhà làm Quận 7"].map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-8">
                {t} <span>✿</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={f.title} data-aos="fade-up" data-aos-delay={i * 100} className={`rounded-3xl bg-white p-6 shadow-[0_8px_30px_-12px_rgba(232,90,138,0.25)]`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-petal text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold text-cocoa">{f.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cocoa-soft">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div data-aos="fade-up" className="text-center">
          <p className="font-display text-lg font-bold text-candy">✿ Menu của tiệm ✿</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold text-cocoa sm:text-5xl">Chọn món bạn thương</h2>
          <p className="mx-auto mt-3 max-w-lg text-cocoa-soft">
            Tiramisu vẫn là “nhân vật chính”, giờ có thêm trà sữa xoài và thái xanh đi kèm cho đủ bộ nè 🧋
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <div key={p.slug} data-aos="zoom-in-up" data-aos-delay={i * 120}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6">
        <div data-aos="fade-up" className="relative overflow-hidden rounded-[2.5rem] bg-petal px-6 py-14 sm:px-12 md:py-20">
          <div className="dotted-bg absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="relative grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
            <div data-aos="fade-right" data-aos-delay="150" className="relative mx-auto aspect-[4/5] w-full max-w-sm">
              <Polaroid
                photo={{ src: ingredients, alt: "Nguyên liệu làm bánh: mascarpone Tatua, bánh Vicenzovo, whipping cream Anchor, sữa tươi" }}
                parallax={0.06}
                className="absolute left-0 top-0 w-[70%] -rotate-6"
                sizes="(min-width: 768px) 260px, 65vw"
              />
              <Polaroid
                photo={{ src: kitchenFridge, alt: "Tiramisu và trà sữa xoài đang được để lạnh trong tủ" }}
                aspect="aspect-[4/3]"
                caption="Đang chờ kem set 🧊"
                parallax={-0.05}
                className="absolute bottom-0 right-0 w-[72%] rotate-[5deg]"
                sizes="(min-width: 768px) 270px, 65vw"
              />
              <TiramisuArt id="story" variant="cup" parallax={-0.15} className="animate-float absolute -right-6 top-[24%] z-20 w-[32%]" />
              <Sparkle parallax={0.2} className="animate-twinkle absolute -top-4 right-6 h-7 w-7" color="#E85A8A" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-candy">Câu chuyện nhỏ</p>
              <h2 className="mt-1 font-display text-4xl font-extrabold leading-tight text-cocoa">
                Từ căn bếp nhỏ
                <br />
                ở Quận 7 💕
              </h2>
              <p className="mt-5 leading-relaxed text-cocoa-soft">
                H.G House bắt đầu từ niềm yêu thích làm bánh cho người thân. Tiệm chọn nguyên liệu tử tế —
                mascarpone Tatua, bánh Vicenzovo của Ý, whipping cream Anchor — và tự tay làm từng mẻ nhỏ để
                hộp bánh đến tay bạn lúc nào cũng tươi ngon.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <div key={s.n} data-aos="fade-up" data-aos-delay={150 + i * 80} className="flex gap-3 rounded-2xl bg-white/80 p-4">
                    <span className="font-display text-2xl font-extrabold text-bubble">{s.n}</span>
                    <div>
                      <h3 className="font-display font-bold text-cocoa">{s.title}</h3>
                      <p className="text-sm text-cocoa-soft">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real photo wall */}
      <section id="hinh-that" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div data-aos="fade-up" className="text-center">
          <p className="font-display text-lg font-bold text-candy">✿ Hình thật, không filter quá đà ✿</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold text-cocoa sm:text-5xl">Góc bếp H.G House</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {gallery.map((g, i) => (
            <div key={g.alt} data-aos="zoom-in" data-aos-delay={i * 100}>
              <Polaroid
                photo={g}
                tape={i % 2 === 0}
                className={["-rotate-3", "rotate-2 md:translate-y-6", "-rotate-2", "rotate-3 md:translate-y-6"][i]}
                sizes="(min-width: 768px) 260px, 45vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="danh-gia" className="scroll-mt-20 mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div data-aos="fade-up" className="mb-12 text-center">
          <p className="font-display text-lg font-bold text-candy">✿ Tự khen hơi kỳ, nhưng thôi kệ ✿</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold text-cocoa sm:text-5xl">Hg tự review bánh nhà mình</h2>
          <p className="mx-auto mt-3 max-w-lg text-cocoa-soft">
            Review của khách đang được tụi mình gom dần nha. Trong lúc chờ thì nghe chủ tiệm “khai” trước nè 😆
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <div key={p.slug} data-aos={i % 2 ? "fade-left" : "fade-right"}>
              <OwnerNote product={p} className={i % 2 ? "md:translate-y-6 md:rotate-1" : "md:-rotate-1"} />
            </div>
          ))}
        </div>
        <div className="mt-16">
          <Reviews />
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="scroll-mt-20 mx-auto max-w-6xl px-4 sm:px-6">
        <div data-aos="zoom-in" className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-candy to-berry px-6 py-14 text-center text-white sm:px-12">
          <Sparkle className="animate-twinkle absolute left-8 top-8 h-8 w-8" color="#fff" />
          <Sparkle className="animate-twinkle absolute bottom-10 right-12 h-6 w-6 [animation-delay:1s]" color="#FFE4EC" />
          <TiramisuArt id="cta" className="animate-float mx-auto -mt-4 w-28" />
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Thèm tiramisu rồi đúng không? 🥺</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Nhắn Zalo hoặc gọi cho tiệm để đặt bánh, đặt trà sữa nha. {shop.shipping}.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={shop.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3.5 font-bold text-berry shadow-[0_5px_0_#c23d6c] transition hover:-translate-y-0.5"
            >
              💬 Zalo {shop.phone}
            </a>
            <a href={shop.tel} className="rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition hover:bg-white/15">
              📞 Gọi ngay
            </a>
          </div>
          <p className="mt-6 text-sm text-white/85">
            📍 {shop.area} · 💗 Facebook:{" "}
            <a href={shop.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-white">
              {shop.facebook}
            </a>
          </p>
        </div>
      </section>
      <Motion />
    </>
  );
}
