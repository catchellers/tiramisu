import { products, shop } from "@/lib/products";
import { reviewsFor } from "@/lib/reviews";

const tints = ["#FFE4EC", "#FFF0C7", "#E9F5DC", "#FCE3D6", "#EFE6F5", "#FFE4EC"];

/** Review thật của khách + nút sang Facebook. Chưa có review thì chỉ hiện nút. */
export default function Reviews({ slug }: { slug?: string }) {
  const list = reviewsFor(slug);

  return (
    <div>
      {list.length > 0 && (
        <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r, i) => {
            const product = products.find((p) => p.slug === r.product);
            return (
              <figure key={i} className="rounded-3xl p-6" style={{ backgroundColor: tints[i % tints.length] }}>
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

      <div className="text-center">
        <a
          href={shop.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-2 border-candy bg-white px-6 py-3 font-bold text-berry transition hover:bg-petal"
        >
          💗 Xem khách nói gì trên Facebook
        </a>
      </div>
    </div>
  );
}
