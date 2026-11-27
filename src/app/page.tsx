import type { Metadata } from "next";
import { HomePage } from "@/components/sites/ngoc-lam-anh/pages/home/HomePage";

const title = "Trang chủ · Du học Ngọc Lâm Anh";
const description =
  "Trung tâm Du học Ngọc Lâm Anh: tiếng Trung giao tiếp, tiếng Trung thương mại, tiếng Trung trẻ em, luyện thi HSK 3.0 (HSK 1 – 9) và tư vấn du học Trung Quốc. Lớp 8 – 12 học viên, học thử miễn phí.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/sites/ngoc-lam-anh/logo-mark.png" },
  openGraph: { title, description, images: ["/sites/ngoc-lam-anh/logo.png"] },
};

export default function Page() {
  return <HomePage />;
}
