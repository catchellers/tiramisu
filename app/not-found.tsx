import Link from "next/link";
import TiramisuArt from "@/components/TiramisuArt";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center">
      <TiramisuArt id="not-found" variant="cup" className="animate-float w-48" />
      <h1 className="mt-6 font-display text-5xl font-extrabold text-berry">Ối, lạc mất rồi!</h1>
      <p className="mt-3 text-cocoa-soft">
        Chiếc bánh bạn tìm có lẽ đã bị ai đó ăn mất 🥲 Quay lại menu chọn vị khác nha.
      </p>
      <Link
        href="/#menu"
        className="mt-8 rounded-full bg-berry px-7 py-3.5 font-bold text-white shadow-[0_5px_0_#c23d6c] transition hover:-translate-y-0.5"
      >
        Về menu bánh
      </Link>
    </div>
  );
}
