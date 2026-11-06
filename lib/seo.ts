import type { Metadata } from "next";

/** Phần openGraph dùng chung. Trang con khai báo openGraph sẽ ghi đè cả object, nên spread cái này vào. */
export const baseOpenGraph = {
  type: "website",
  locale: "vi_VN",
  siteName: "Tiramisu Hg",
} satisfies Metadata["openGraph"];

/** og:url + canonical cho một đường dẫn (tương đối với metadataBase) */
export function pageUrl(path: string, image?: { url: string; width: number; height: number; alt: string }): Metadata {
  const images = image ? [image] : undefined;
  return {
    alternates: { canonical: path },
    openGraph: { ...baseOpenGraph, url: path, ...(images && { images }) },
    ...(images && { twitter: { card: "summary_large_image", images } }),
  };
}
