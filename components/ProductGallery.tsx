"use client";

import Image from "next/image";
import { useState } from "react";
import Sparkle from "./Sparkle";
import TiramisuArt from "./TiramisuArt";
import type { Photo } from "@/lib/products";

type Props = { slug: string; photos: Photo[]; bg: string; badge?: string; mascot?: boolean };

export default function ProductGallery({ slug, photos, bg, badge, mascot }: Props) {
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  return (
    <div>
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem]" style={{ backgroundColor: bg }}>
        <div className="dotted-bg absolute inset-0 opacity-70" aria-hidden="true" />
        {photo.small ? (
          // Ảnh độ phân giải thấp: đặt trong polaroid nhỏ nghiêng cho có chủ đích
          <figure className="relative w-[68%] -rotate-3 rounded-md bg-white p-3 pb-10 shadow-[0_18px_36px_-14px_rgba(91,58,51,0.4)]">
            <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-4deg] bg-bubble/80" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 360px, 65vw" placeholder="blur" preload className="object-cover" />
            </div>
            <figcaption className="absolute inset-x-0 bottom-2.5 text-center font-display font-bold text-cocoa-soft">H.G House 💗</figcaption>
          </figure>
        ) : (
          <Image
            key={index}
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            preload
            className="object-cover"
          />
        )}
        {mascot && (
          <TiramisuArt id={`detail-${slug}`} className="animate-float absolute -bottom-3 -right-3 z-10 w-[32%]" />
        )}
        <Sparkle className="animate-twinkle absolute left-6 top-16 z-10 h-7 w-7" color="#fff" />
        {badge && (
          <span className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-berry shadow-sm">{badge}</span>
        )}
      </div>

      {photos.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3" role="tablist" aria-label="Ảnh sản phẩm">
          {photos.map((p, i) => (
            <button
              key={p.alt}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={p.alt}
              onClick={() => setIndex(i)}
              className={`relative aspect-square overflow-hidden rounded-2xl border-[3px] transition ${
                i === index ? "border-berry" : "border-white opacity-75 hover:opacity-100"
              }`}
            >
              <Image src={p.src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
