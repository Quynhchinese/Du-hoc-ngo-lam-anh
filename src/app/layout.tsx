import type { Metadata, Viewport } from "next";
import "@/components/sites/ngoc-lam-anh/site.css";
import "@/components/sites/ngoc-lam-anh/cn-ornament.css";

export const metadata: Metadata = {
  title: "Du học Ngọc Lâm Anh",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Cùng bộ font Google Fonts mà trang gốc tải
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Lexend:wght@600;700;800;900&family=Ma+Shan+Zheng&family=Dancing+Script:wght@700&family=Playfair+Display:wght@800;900&family=Noto+Serif+SC:wght@600&display=swap";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>{children}</body>
    </html>
  );
}
