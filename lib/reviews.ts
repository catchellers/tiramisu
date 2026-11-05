/**
 * Review THẬT của khách (tin nhắn Zalo, bình luận Facebook…).
 * Danh sách trống thì trang chỉ hiện nút dẫn sang Facebook.
 *
 * Thêm review theo mẫu (xin phép khách trước, giữ nguyên giọng của khách):
 * { name: "Ngọc T.", product: "tiramisu-truyen-thong", rating: 5, text: "...", source: "Zalo" },
 */
export type Review = {
  name: string;
  /** slug sản phẩm được nhắc tới */
  product: string;
  rating: number;
  text: string;
  source: "Zalo" | "Facebook" | "Tại tiệm";
};

export const reviews: Review[] = [];

export function reviewsFor(slug?: string) {
  return slug ? reviews.filter((r) => r.product === slug) : reviews;
}
