/**
 * Đánh giá của khách.
 *
 * Các mục `sample: true` chỉ là NỘI DUNG MẪU để xem trước giao diện, và trên trang
 * sẽ hiện nhãn "Mẫu". Khi có feedback thật (tin nhắn Zalo, bình luận Facebook…),
 * hãy thay bằng review thật và bỏ `sample` (hoặc xoá hẳn các mục mẫu).
 */
export type Review = {
  name: string;
  /** slug sản phẩm được nhắc tới */
  product: string;
  rating: number;
  text: string;
  source: "Zalo" | "Facebook" | "Tại tiệm";
  sample?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Khách hàng mẫu",
    product: "tiramisu-truyen-thong",
    rating: 5,
    text: "Đây là chỗ hiển thị review thật về tiramisu — ví dụ cảm nhận về độ mềm của kem hay vị cà phê.",
    source: "Zalo",
    sample: true,
  },
  {
    name: "Khách hàng mẫu",
    product: "tiramisu-truyen-thong",
    rating: 5,
    text: "Dán nguyên văn bình luận của khách trên Facebook vào đây (nhớ xin phép khách trước nha).",
    source: "Facebook",
    sample: true,
  },
  {
    name: "Khách hàng mẫu",
    product: "panna-cotta-chanh-day",
    rating: 5,
    text: "Review thật cho panna cotta chanh dây sẽ hiện ở đây.",
    source: "Zalo",
    sample: true,
  },
  {
    name: "Khách hàng mẫu",
    product: "panna-cotta-kiwi",
    rating: 5,
    text: "Review thật cho panna cotta kiwi sẽ hiện ở đây.",
    source: "Facebook",
    sample: true,
  },
  {
    name: "Khách hàng mẫu",
    product: "flan",
    rating: 5,
    text: "Review thật cho flan / combo 10 hũ sẽ hiện ở đây.",
    source: "Zalo",
    sample: true,
  },
  {
    name: "Khách hàng mẫu",
    product: "tiramisu-truyen-thong",
    rating: 5,
    text: "Review về giao hàng, đóng gói, sticker xinh… cũng rất đáng đưa lên.",
    source: "Tại tiệm",
    sample: true,
  },
];

export function reviewsFor(slug?: string) {
  return slug ? reviews.filter((r) => r.product === slug) : reviews;
}
