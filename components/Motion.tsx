"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

let aosReady = false;

/**
 * Bật hiệu ứng cuộn cho toàn site:
 * - AOS: phần tử có `data-aos` hiện ra một lần khi cuộn tới.
 * - Parallax: phần tử có `data-parallax="0.1"` trôi chậm/nhanh hơn trang.
 *   Mỗi khung hình chỉ đọc vị trí rồi ghi `translate` (không tính lại layout),
 *   cuộn bằng listener passive và chỉ chạy tối đa 1 lần / frame.
 * Cả hai đều tắt khi người dùng bật "giảm chuyển động".
 *
 * Đặt <Motion /> ở CUỐI nội dung mỗi trang (trong cùng Suspense boundary với nội dung),
 * để nó chỉ chạy sau khi phần đó đã hydrate — tránh sửa DOM trước React (hydration mismatch).
 */
export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (aosReady) {
      AOS.refreshHard(); // chuyển trang: chỉ quét lại phần tử mới, không gắn thêm listener
    } else {
      aosReady = true;
      AOS.init({
        once: true,
        duration: 700,
        easing: "ease-out-cubic",
        offset: 40,
        disable: reduced,
      });
    }

    if (reduced) return;

    // Lượng đã dịch của từng phần tử, để trừ ra khi đọc vị trí (tránh tự cộng dồn).
    const applied = new WeakMap<HTMLElement, number>();
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
      const next: [HTMLElement, number][] = [];

      // Đọc hết trước…
      els.forEach((el) => {
        const prev = applied.get(el) ?? 0;
        const r = el.getBoundingClientRect();
        const top = r.top - prev;
        if (top > vh * 1.5 || top + r.height < -vh * 0.5) return; // ngoài màn hình: bỏ qua
        const speed = Number(el.dataset.parallax) || 0;
        const center = top + r.height / 2;
        next.push([el, Math.round(-(center - vh / 2) * speed * 10) / 10]);
      });

      // …rồi mới ghi, để trình duyệt không phải tính layout xen kẽ.
      for (const [el, y] of next) {
        if (applied.get(el) === y) continue;
        applied.set(el, y);
        el.style.translate = `0 ${y}px`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
