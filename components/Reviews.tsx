import { products, shop } from "@/lib/products";
import { reviewsFor } from "@/lib/reviews";

const tints = ["#FFE4EC", "#FFF0C7", "#E9F5DC", "#FCE3D6", "#EFE6F5", "#FFE4EC"];

export default function Reviews({ slug }: { slug?: string }) {
  const list = reviewsFor(slug);
  const hasSamples = list.some((r) => r.sample);

  return (
    <div>
      {hasSamples && (
        <p className="mx-auto mb-8 max-w-xl rounded-2xl border-2 border-dashed border-bubble bg-white px-4 py-3 text-center text-sm font-semibold text-cocoa-soft">
          🌸 Tiệm đang tổng hợp đánh giá thật từ khách — các thẻ gắn nhãn “Mẫu” chỉ là bản xem trước.
        </p>
      )}

      {list.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r, i) => {
            const product = products.find((p) => p.slug === r.product);
            return (
              <figure key={i} className="relative rounded-3xl p-6" style={{ backgroundColor: tints[i % tints.length] }}>
                {r.sample && (
                  <span className="absolute right-4 top-4 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-cocoa-soft">
                    Mẫu
                  </span>
                )}
                <div className="text-candy" aria-label={`${r.rating} trên 5 sao`}>
                  {"★".repeat(r.rating)}
                  <span className="text-white">{"★".repeat(5 - r.rating)}</span>
                </div>
                <blockquote className="mt-3 leading-relaxed text-cocoa">“{r.text}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-display text-lg font-bold text-berry">
                    {r.name[0]}
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold text-cocoa">{r.name}</span>
                    <span className="text-cocoa-soft">
                      {!slug && product ? `${product.short} · ` : ""}qua {r.source}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}

      <div className="mt-10 text-center">
        <a
          href={shop.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-candy bg-white px-6 py-3 font-bold text-berry transition hover:bg-petal"
        >
          💗 Xem phản hồi của khách trên Facebook
        </a>
      </div>
    </div>
  );
}
