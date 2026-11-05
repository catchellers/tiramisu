import Image from "next/image";
import type { Photo } from "@/lib/products";

type Props = {
  photo: Photo;
  caption?: string;
  className?: string;
  /** Tỉ lệ khung ảnh, ví dụ "aspect-square", "aspect-[4/3]" */
  aspect?: string;
  sizes?: string;
  tape?: boolean;
  preload?: boolean;
  /** Tốc độ parallax (xem components/Motion.tsx) */
  parallax?: number;
};

/** Khung ảnh polaroid có băng dính washi — đồng bộ phong cách poster menu của tiệm. */
export default function Polaroid({ photo, caption, className = "", aspect = "aspect-square", sizes = "(min-width: 768px) 30vw, 80vw", tape = true, preload, parallax }: Props) {
  return (
    <figure className={`${className.includes("absolute") ? "" : "relative "}rounded-md bg-white p-2.5 pb-3 shadow-[0_14px_30px_-12px_rgba(91,58,51,0.35)] ${className}`} data-parallax={parallax}>
      {tape && (
        <span
          className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-bubble/80 shadow-sm"
          aria-hidden="true"
        />
      )}
      <div className={`relative overflow-hidden rounded-sm bg-petal ${aspect}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          placeholder="blur"
          preload={preload}
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="pt-2 text-center font-display text-sm font-bold text-cocoa-soft">{caption}</figcaption>
      )}
    </figure>
  );
}
