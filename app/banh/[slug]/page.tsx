import type { Metadata } from "next";
import Link from "next/link";
import Motion from "@/components/Motion";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import PurchasePanel from "@/components/PurchasePanel";
import OwnerNote from "@/components/OwnerNote";
import Reviews from "@/components/Reviews";
import { formatPrice, fromPrice, getProduct, products, shop } from "@/lib/products";
import { reviewsFor } from "@/lib/reviews";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/banh/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.tagline}. ${fromPrice(product) === null ? "" : `${formatPrice(fromPrice(product))}/${product.unit} — `}${shop.area}.`,
  };
}

export default function ProductPage({ params }: PageProps<"/banh/[slug]">) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductContent params={params} />
      </Suspense>
    </div>
  );
}

function ProductSkeleton() {
  return (
    <div className="animate-pulse pt-6" aria-busy="true" aria-label="Đang tải bánh">
      <div className="h-4 w-48 rounded-full bg-petal" />
      <div className="mt-6 grid gap-10 md:grid-cols-2 lg:gap-16">
        <div className="aspect-square rounded-[2.5rem] bg-petal" />
        <div className="space-y-4 md:pt-4">
          <div className="h-12 w-3/4 rounded-2xl bg-petal" />
          <div className="h-5 w-1/2 rounded-full bg-petal" />
          <div className="h-24 rounded-2xl bg-petal" />
          <div className="h-28 rounded-2xl bg-petal" />
        </div>
      </div>
    </div>
  );
}

async function ProductContent({ params }: Pick<PageProps<"/banh/[slug]">, "params">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isTiramisu = product.slug === "tiramisu-truyen-thong";
  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <nav aria-label="Breadcrumb" className="pt-6 text-sm font-semibold text-cocoa-soft">
        <Link href="/" className="hover:text-berry">Trang chủ</Link>
        <span className="mx-2 text-bubble">/</span>
        <Link href="/#menu" className="hover:text-berry">Menu</Link>
        <span className="mx-2 text-bubble">/</span>
        <span className="text-berry">{product.short}</span>
      </nav>

      <section className="mt-6 grid gap-10 md:grid-cols-2 lg:gap-16">
        <ProductGallery slug={product.slug} photos={product.photos} bg={product.bg} badge={product.badge} mascot={isTiramisu} />

        <div className="md:pt-4">
          <p className="font-display text-lg font-bold text-candy">Tiramisu Hg · H.G House</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold leading-tight text-cocoa sm:text-5xl">{product.name}</h1>
          <p className="mt-2 text-lg font-semibold text-candy">{product.tagline}</p>
          <p className="mt-4 font-display text-3xl font-extrabold text-berry">
            {product.options.length > 1 && <span className="text-lg text-cocoa-soft">từ </span>}
            {formatPrice(fromPrice(product))}{" "}
            {fromPrice(product) !== null && <span className="text-base font-semibold text-cocoa-soft">/ {product.unit}</span>}
          </p>


          <div className="mt-6 space-y-3 leading-relaxed text-cocoa-soft">
            {product.description.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>

          <div className="mt-8">
            <PurchasePanel name={product.name} options={product.options} />
          </div>

          <ul className="mt-8 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-cocoa-soft">
            <li className="rounded-2xl bg-white p-3">🛵<br />Freeship &lt; 3km</li>
            <li className="rounded-2xl bg-white p-3">🏠<br />Nhà làm mẻ nhỏ</li>
            <li className="rounded-2xl bg-white p-3">📍<br />Tân Hưng, Q.7</li>
          </ul>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-3">
        <div data-aos="fade-up" className="rounded-[2rem] bg-white p-7">
          <h2 className="font-display text-2xl font-bold text-cocoa">Thành phần 🧺</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.ingredients.map((i) => (
              <li key={i} className="rounded-full bg-petal px-3.5 py-1.5 text-sm font-semibold text-rosewood">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className="rounded-[2rem] bg-white p-7">
          <h2 className="font-display text-2xl font-bold text-cocoa">Hương vị 👅</h2>
          <dl className="mt-4 space-y-3">
            {product.taste.map((t) => (
              <div key={t.label}>
                <dt className="flex justify-between text-sm font-semibold text-cocoa-soft">
                  <span>{t.label}</span>
                  <span>{t.value}/5</span>
                </dt>
                <dd className="mt-1 flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`h-2.5 flex-1 rounded-full ${i < t.value ? "bg-candy" : "bg-petal"}`} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="rounded-[2rem] bg-petal p-7">
          <h2 className="font-display text-2xl font-bold text-cocoa">Bảo quản 🧊</h2>
          <p className="mt-4 leading-relaxed text-cocoa-soft">{product.storage}</p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa-soft">
            Mẹo nhỏ: lấy bánh ra khỏi tủ lạnh vài phút trước khi ăn để kem mềm và dậy mùi hơn nha ✨
          </p>
        </div>
      </section>

      <section id="danh-gia" className="mt-20 scroll-mt-20">
        <h2 data-aos="fade-up" className="mb-8 font-display text-3xl font-extrabold text-cocoa sm:text-4xl">Chủ tiệm nói nhỏ nè 🤫</h2>
        <div data-aos="fade-up" data-aos-delay="100">
          <OwnerNote product={product} link={false} className="max-w-3xl" />
        </div>
        {reviewsFor(product.slug).length > 0 && (
          <>
            <h2 className="mb-8 mt-16 font-display text-3xl font-extrabold text-cocoa sm:text-4xl">Khách nói gì về {product.short} 💬</h2>
            <Reviews slug={product.slug} />
          </>
        )}
      </section>

      <section className="mt-20">
        <h2 data-aos="fade-up" className="font-display text-3xl font-extrabold text-cocoa">Ăn kèm cho trọn vị 💕</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <div key={p.slug} data-aos="zoom-in-up" data-aos-delay={i * 120}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>
      <Motion />
    </>
  );
}
