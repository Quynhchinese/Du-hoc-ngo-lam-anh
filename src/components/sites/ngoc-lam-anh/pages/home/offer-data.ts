import SITE from "@/content/site.json";

// Nội dung hero động và khối ưu đãi du học trên trang chủ.
// Ô có dạng "[...]" là chỗ trung tâm cần điền nội dung thật.

/** Hero "Mở cánh cửa du học – Cất cánh ước mơ" */
export const HERO_FLY = {
  motto: "开启留学之窗 · 放飞梦想",
  line1: "Mở cánh cửa du học",
  line2: "Cất cánh ước mơ",
  lead:
    "Học tiếng Trung bài bản, tư vấn du học Trung Quốc tận tâm – Ngọc Lâm Anh đồng hành cùng bạn từ những bước đầu tiên đến chuyến bay sang giảng đường mơ ước.",
  shutters: ["留", "学"] as const,
  sign: "中国留学",
};

/** Ưu đãi du học — sửa trong dashboard (Nội dung trang) hoặc file src/content/site.json */
export const OFFER = { zh: "免费留学 · 价值十亿越南盾礼包", ...SITE.offer };
