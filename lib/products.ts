import type { StaticImageData } from "next/image";
import tiramisuOreoSide from "@/public/images/tiramisu-oreo-side.jpg";
import tiramisuOreoTop from "@/public/images/tiramisu-oreo-top.jpg";
import tiramisuLayers from "@/public/images/tiramisu-layers.jpg";
import kitchenFridge from "@/public/images/kitchen-fridge.jpg";
import milkTea from "@/public/images/milk-tea-xoai-dao.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** Ảnh nhỏ — hiển thị dạng polaroid thay vì tràn khung */
  small?: boolean;
};

/** price = null nghĩa là chưa niêm yết giá, hiện "Nhắn tiệm" */
export type Option = { id: string; label: string; note: string; price: number | null };

export type Product = {
  slug: string;
  name: string;
  short: string;
  unit: string;
  tagline: string;
  description: string[];
  options: Option[];
  badge?: string;
  bg: string;
  photos: Photo[];
  ingredients: string[];
  taste: { label: string; value: number }[];
  storage: string;
  /** Tiệm tự review món của mình — giọng thân mật, ghi rõ là của tiệm */
  ownerNote: string[];
};

export const shop = {
  name: "Tiramisu Hg",
  phone: "0901 451 841",
  tel: "tel:0901451841",
  zalo: "https://zalo.me/0901451841",
  facebook: "Thủy Ngân",
  facebookUrl: "https://www.facebook.com/profile.php?id=61567991120409",
  area: "Phường Tân Hưng, Quận 7, TP.HCM",
  shipping: "Freeship dưới 3km · Trên 3km mua từ 2 món được freeship",
};

export const gallery: Photo[] = [
  { src: tiramisuOreoSide, alt: "Hộp tiramisu nhiều lớp kem, trên mặt có nửa bánh Oreo và bông hoa nhỏ" },
  { src: kitchenFridge, alt: "Tiramisu và chai trà sữa xoài đào xếp trong tủ lạnh" },
  { src: milkTea, alt: "Chai lục trà sữa xoài đào" },
  { src: tiramisuOreoTop, alt: "Mặt trên tiramisu phủ cacao, cắm nửa bánh Oreo" },
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
      "Trên mặt rắc cacao nguyên chất thật dày, cắm nửa chiếc bánh Oreo và một bông hoa nhỏ xinh. Mỗi hộp đều được tiệm làm tay và để lạnh cho kem set lại trước khi giao.",
    ],
    options: [{ id: "hop", label: "1 hộp", note: "Hộp vuông", price: 45000 }],
    badge: "Signature",
    bg: "#FFE4EC",
    photos: [
      { src: tiramisuOreoSide, alt: "Hộp tiramisu nhiều lớp, trên mặt có nửa bánh Oreo" },
      { src: tiramisuOreoTop, alt: "Mặt trên tiramisu phủ cacao, nửa bánh Oreo và bông hoa nhỏ" },
      { src: tiramisuLayers, alt: "Mặt cắt nhiều lớp kem và bánh của hộp tiramisu" },
      { src: kitchenFridge, alt: "Tiramisu xếp ngay ngắn trong tủ lạnh" },
    ],
    ingredients: ["Mascarpone Tatua", "Bánh Vicenzovo (Ý)", "Whipping cream Anchor", "Sữa tươi Vinamilk", "Cà phê", "Bột cacao", "Bánh Oreo"],
    taste: [
      { label: "Ngọt", value: 3 },
      { label: "Thơm cà phê", value: 3 },
      { label: "Béo mịn", value: 4 },
    ],
    storage: "Bảo quản ngăn mát tủ lạnh, dùng ngon nhất trong 2–3 ngày.",
    ownerNote: [
      "Món này mình làm nhiều nhất nên cũng tự tin nhất luôn 😆 Kem là mascarpone Tatua đánh chung whipping Anchor, mịn mà không bị ngấy. Ăn hết nguyên hộp vẫn chưa thấy ngán (mình thử rồi, không phải nói xạo đâu).",
      "Bánh dùng Vicenzovo bên Ý, nhúng cà phê nhanh tay thôi cho khỏi nhão. Cacao trên mặt rắc dày lắm, mở nắp ra là thơm phức, nhớ đừng thở mạnh kẻo cacao bay lên mặt nha 🤣 Nửa miếng Oreo cắm trên đó là để dành cắn cuối cùng, còn bông hoa nhỏ thì… để cho xinh thôi 🌼",
      "Lấy ra khỏi tủ lạnh tầm 5 phút rồi ăn là vừa. Để ngoài lâu quá kem mềm chảy ra thì hơi buồn á.",
    ],
  },
  {
    slug: "luc-tra-sua-xoai-dao",
    name: "Lục trà sữa xoài đào",
    short: "Trà sữa xoài đào",
    unit: "chai",
    tagline: "Lục trà thanh mát, xoài đào thơm lừng, kèm trân châu đen",
    description: [
      "Lục trà pha đậm vừa, uống thanh và không chát, hoà cùng sữa béo nhẹ. Xoài đào được cho dọc theo thành chai nên vừa đẹp mắt vừa thơm vị trái cây.",
      "Mỗi chai đã kèm sẵn trân châu đen dẻo dai. Đóng chai nắp vặn tiện mang đi, lắc đều trước khi uống để vị trà, sữa và xoài đào hoà quyện nha.",
    ],
    options: [{ id: "chai", label: "1 chai", note: "Kèm trân châu đen", price: 25000 }],
    badge: "Mới",
    bg: "#FFF0C7",
    photos: [
      { src: milkTea, alt: "Chai lục trà sữa xoài đào" },
      { src: kitchenFridge, alt: "Chai trà sữa xoài đào để lạnh cạnh những hộp tiramisu" },
    ],
    ingredients: ["Lục trà", "Sữa", "Xoài", "Đào", "Trân châu đen"],
    taste: [
      { label: "Ngọt", value: 3 },
      { label: "Thơm trà", value: 4 },
      { label: "Vị trái cây", value: 4 },
    ],
    storage: "Bảo quản lạnh, ngon nhất khi uống trong ngày.",
    ownerNote: [
      "Món mới toanh của tiệm nè 🧋 Nền là lục trà nên uống thanh, không bị chát, sữa béo vừa vừa chứ không ngậy.",
      "Xoài đào được cho dọc theo thành chai, lắc nhẹ cái là ra màu vàng cam nhìn mê ghê. 25k mà có luôn trân châu đen nhai dẻo dẻo, khỏi phải gọi thêm topping 😋",
      "Uống lạnh là chuẩn bài, mà làm thêm 1 hộp tiramisu nữa thì buổi chiều coi như được chữa lành 😌",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(value: number | null) {
  return value === null ? "Nhắn tiệm" : new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

/** Giá thấp nhất trong các lựa chọn; null nếu chưa niêm yết */
export function fromPrice(product: Product) {
  const prices = product.options.map((o) => o.price).filter((p): p is number => p !== null);
  return prices.length ? Math.min(...prices) : null;
}
