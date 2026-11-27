import type { Metadata } from "next";
import { CoursesPage } from "@/components/sites/ngoc-lam-anh/CoursesPage";

const title = "Khóa học · Du học Ngọc Lâm Anh";
const description =
  "Khóa học tiếng Trung giao tiếp, tiếng Trung thương mại, tiếng Trung trẻ em YCT 1–6 và luyện thi HSK 3.0 (HSK 1–9). Lớp 8–12 học viên, học thử miễn phí.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/sites/ngoc-lam-anh/logo-mark.png" },
  openGraph: { title, description, images: ["/sites/ngoc-lam-anh/logo.png"] },
};

export default function Page() {
  return <CoursesPage />;
}
