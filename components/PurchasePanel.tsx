"use client";

import { useEffect, useState } from "react";
import { formatPrice, shop, type Option } from "@/lib/products";

type Props = { name: string; options: Option[] };

export default function PurchasePanel({ name, options }: Props) {
  const [optionId, setOptionId] = useState(options[0].id);
  const [qty, setQty] = useState(1);
  const [toast, setToast] = useState<string | null>(null);

  const option = options.find((o) => o.id === optionId) ?? options[0];
  const total = option.price === null ? null : option.price * qty;

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3200);
    return () => clearTimeout(t);
  }, [toast]);

  async function order() {
    const price = total === null ? "" : ` — ${formatPrice(total)}`;
    const message = `Chào tiệm, mình muốn đặt: ${qty} × ${name} (${option.label})${price}. Giao đến: `;
    try {
      await navigator.clipboard.writeText(message);
      setToast("Đã copy đơn hàng 💕 Dán vào Zalo gửi tiệm nha!");
    } catch {
      setToast(`Nhắn tiệm: ${qty} × ${name} (${option.label}) 💕`);
    }
    window.open(shop.zalo, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      {options.length > 1 && (
        <fieldset className="mb-6">
          <legend className="font-display text-lg font-bold text-cocoa">Chọn loại</legend>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {options.map((o) => {
              const active = o.id === optionId;
              return (
                <label
                  key={o.id}
                  className={`cursor-pointer rounded-2xl border-2 p-3 text-center transition ${
                    active ? "border-berry bg-petal" : "border-bubble/60 bg-white hover:border-candy"
                  }`}
                >
                  <input type="radio" name="option" value={o.id} checked={active} onChange={() => setOptionId(o.id)} className="sr-only" />
                  <span className="block font-display font-bold text-cocoa">{o.label}</span>
                  <span className="block text-xs text-cocoa-soft">{o.note}</span>
                  <span className="mt-1 block text-sm font-bold text-berry">{formatPrice(o.price)}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border-2 border-bubble bg-white">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-12 w-12 rounded-full text-xl font-bold text-berry transition hover:bg-petal disabled:opacity-40"
            disabled={qty <= 1}
            aria-label="Giảm số lượng"
          >
            −
          </button>
          <span className="w-8 text-center font-display text-lg font-bold" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(50, q + 1))}
            className="h-12 w-12 rounded-full text-xl font-bold text-berry transition hover:bg-petal"
            aria-label="Tăng số lượng"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={order}
          className="h-14 flex-1 rounded-full bg-berry px-6 font-bold text-white shadow-[0_5px_0_#c23d6c] transition hover:-translate-y-0.5 hover:shadow-[0_7px_0_#c23d6c] active:translate-y-1 active:shadow-[0_1px_0_#c23d6c]"
        >
          💬 Đặt qua Zalo{total !== null && ` · ${formatPrice(total)}`}
        </button>
      </div>

      <p className="mt-3 text-sm font-semibold text-cocoa-soft">
        {total === null ? "Giá đang cập nhật, nhắn Zalo hoặc gọi " : "Hoặc gọi "}
        <a href={shop.tel} className="text-berry hover:underline">{shop.phone}</a> để đặt nhanh nhé.
      </p>

      {toast && (
        <div
          role="status"
          className="animate-pop-in fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md rounded-2xl bg-cocoa px-5 py-4 text-center text-sm font-semibold text-white shadow-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
