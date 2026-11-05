import type { StaticImageData } from "next/image";
import type { DessertKind } from "@/components/DessertArt";
import tiramisuLayers from "@/public/images/tiramisu-layers.jpg";
import tiramisuTop from "@/public/images/tiramisu-top.jpg";
import tiramisuBoxes from "@/public/images/tiramisu-boxes.jpg";
import kitchenFridge from "@/public/images/kitchen-fridge.jpg";
import pannaCottaChanhDay from "@/public/images/panna-cotta-chanh-day.jpg";
import pannaCottaKiwi from "@/public/images/panna-cotta-kiwi.jpg";
import flan from "@/public/images/flan.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** Ảnh nhỏ (cắt từ poster) — hiển thị dạng polaroid thay vì tràn khung */
  small?: boolean;
};

export type Option = { id: string; label: string; note: string; price: number };

export type Product = {
  slug: string;
  name: string;
  short: string;
  unit: string;
  tagline: string;
  description: string[];
  options: Option[];
  badge?: string;
  promo?: string;
  bg: string;
  /** Ảnh minh hoạ dùng cho thẻ menu; trang chi tiết luôn dùng ảnh thật */
  art?: DessertKind;
  photos: Photo[];
  ingredients: string[];
  taste: { label: string; value: number }[];
  storage: string;
};

export const shop = {
  name: "Tiramisu Hg",
  phone: "0901 451 841",
  tel: "tel:0901451841",
  zalo: "https://zalo.me/0901451841",
  facebook: "Thủy Ngân",
  facebookUrl: "https://www.facebook.com/profile.php?id=61567991120409",
  area: "Phường Tân Hưng, Quận 7, TP.HCM",
  shipping: "Freeship dưới 3km · Trên 3km mua từ 2 bánh được freeship",
};

export const promos = [
  { icon: "🎁", title: "Mua 3 tặng 1", text: "Mua từ 3 hộp tiramisu trở lên, tặng kèm 1 hũ flan." },
  { icon: "🍮", title: "Combo nhà mình", text: "2 tiramisu + 2 panna cotta, tặng kèm 1 hũ flan." },
  { icon: "🥄", title: "Combo 10 hũ flan", text: "Chỉ 70.000đ cho 10 hũ, tiết kiệm 10.000đ." },
  { icon: "🛵", title: "Freeship", text: "Dưới 3km freeship. Trên 3km mua từ 2 bánh cũng freeship." },
];

export const gallery: Photo[] = [
  { src: tiramisuBoxes, alt: "Những hộp tiramisu dán sticker H.G House" },
  { src: tiramisuLayers, alt: "Mặt cắt nhiều lớp kem và bánh của hộp tiramisu" },
  { src: kitchenFridge, alt: "Tiramisu xếp trong tủ lạnh cùng mascarpone và whipping cream" },
  { src: tiramisuTop, alt: "Mặt trên tiramisu phủ cacao và marshmallow" },
];

export const products: Product[] = [
  {
    slug: "tiramisu-truyen-thong",
    name: "Tiramisu truyền thống",
    short: "Tiramisu",
    unit: "hộp",
    tagline: "Mềm mịn từng lớp, thơm cà phê & cacao",
    description: [
      "Món “con cưng” của tiệm: bánh ladyfinger Vicenzovo nhập từ Ý nhúng cà phê, xếp xen kẽ với lớp kem mascarpone Tatua đánh bông cùng whipping cream Anchor — béo mà không ngấy.",
      "Phủ một lớp cacao nguyên chất thật dày và vài viên marshmallow trắng xinh trên mặt. Mỗi hộp đều được tiệm làm tay và để lạnh cho kem set lại trước khi giao.",
    ],
    options: [{ id: "hop", label: "1 hộp", note: "Hộp vuông", price: 45000 }],
    badge: "Signature",
    promo: "Mua từ 3 hộp tặng kèm 1 flan",
    bg: "#FFE4EC",
    photos: [
      { src: tiramisuLayers, alt: "Mặt cắt nhiều lớp của hộp tiramisu truyền thống" },
      { src: tiramisuTop, alt: "Mặt trên tiramisu phủ cacao và marshmallow" },
      { src: tiramisuBoxes, alt: "Nhiều hộp tiramisu dán sticker H.G House" },
      { src: kitchenFridge, alt: "Tiramisu xếp ngay ngắn trong tủ lạnh" },
    ],
    ingredients: ["Mascarpone Tatua", "Bánh Vicenzovo (Ý)", "Whipping cream Anchor", "Sữa tươi Vinamilk", "Cà phê", "Bột cacao", "Marshmallow"],
    taste: [
      { label: "Ngọt", value: 3 },
      { label: "Thơm cà phê", value: 3 },
      { label: "Béo mịn", value: 4 },
    ],
    storage: "Bảo quản ngăn mát tủ lạnh, dùng ngon nhất trong 2–3 ngày.",
  },
  {
    slug: "panna-cotta-chanh-day",
    name: "Panna cotta chanh dây",
    short: "Panna cotta chanh dây",
    unit: "hũ",
    tagline: "Kem sữa mềm rung rinh, sốt chanh dây chua ngọt",
    description: [
      "Lớp panna cotta sữa trắng mịn, mềm rung rinh, bên trên là sốt chanh dây còn nguyên hạt giòn giòn.",
      "Vị chua nhẹ của chanh dây giúp món tráng miệng thật thanh mát — ăn kèm tiramisu là hết sảy.",
    ],
    options: [{ id: "hu", label: "1 hũ", note: "Hũ nhỏ", price: 10000 }],
    promo: "2 tiramisu + 2 panna cotta tặng 1 flan",
    bg: "#FFF0C7",
    art: "panna-chanh-day",
    photos: [{ src: pannaCottaChanhDay, alt: "Hũ panna cotta phủ sốt chanh dây", small: true }],
    ingredients: ["Sữa tươi", "Kem sữa", "Gelatin", "Chanh dây"],
    taste: [
      { label: "Ngọt", value: 2 },
      { label: "Chua nhẹ", value: 3 },
      { label: "Mềm mịn", value: 5 },
    ],
    storage: "Bảo quản ngăn mát tủ lạnh, dùng trong 2 ngày.",
  },
  {
    slug: "panna-cotta-kiwi",
    name: "Panna cotta kiwi",
    short: "Panna cotta kiwi",
    unit: "hũ",
    tagline: "Xanh mát mắt, kiwi tươi chua chua",
    description: [
      "Panna cotta sữa béo nhẹ kết hợp lớp kiwi xanh mướt cắt nhỏ, chua dịu và thơm.",
      "Màu xanh trắng xinh xắn, rất hợp để làm quà nhỏ hoặc tráng miệng sau bữa ăn.",
    ],
    options: [{ id: "hu", label: "1 hũ", note: "Hũ nhỏ", price: 10000 }],
    promo: "2 tiramisu + 2 panna cotta tặng 1 flan",
    bg: "#E9F5DC",
    art: "panna-kiwi",
    photos: [{ src: pannaCottaKiwi, alt: "Hũ panna cotta phủ kiwi xanh", small: true }],
    ingredients: ["Sữa tươi", "Kem sữa", "Gelatin", "Kiwi"],
    taste: [
      { label: "Ngọt", value: 2 },
      { label: "Chua nhẹ", value: 3 },
      { label: "Mềm mịn", value: 5 },
    ],
    storage: "Bảo quản ngăn mát tủ lạnh, dùng trong 2 ngày.",
  },
  {
    slug: "flan",
    name: "Flan caramel",
    short: "Flan",
    unit: "hũ",
    tagline: "Bánh flan mềm mướt, caramel đắng nhẹ",
    description: [
      "Bánh flan trứng sữa hấp mềm mướt, lớp caramel dưới đáy đắng nhẹ ngọt thơm — hương vị tuổi thơ quen thuộc.",
      "Mua combo 10 hũ để cả nhà cùng ăn, hoặc nhận flan tặng kèm khi mua tiramisu nhé!",
    ],
    options: [
      { id: "hu", label: "1 hũ", note: "Hũ nhỏ", price: 8000 },
      { id: "combo10", label: "Combo 10 hũ", note: "Tiết kiệm 10k", price: 70000 },
    ],
    badge: "Combo 70k",
    bg: "#FCE3D6",
    art: "flan",
    photos: [{ src: flan, alt: "Những hũ bánh flan xếp chồng", small: true }],
    ingredients: ["Trứng gà", "Sữa tươi", "Sữa đặc", "Đường caramel"],
    taste: [
      { label: "Ngọt", value: 3 },
      { label: "Thơm trứng sữa", value: 4 },
      { label: "Mềm mịn", value: 5 },
    ],
    storage: "Bảo quản ngăn mát tủ lạnh, dùng trong 2–3 ngày.",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export function fromPrice(product: Product) {
  return Math.min(...product.options.map((o) => o.price));
}
