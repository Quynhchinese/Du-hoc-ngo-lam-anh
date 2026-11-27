// Nội dung website Du học Ngọc Lâm Anh.
// Thông tin khóa học lấy từ https://tiengtrungchuongmy.com/ — sửa chữ tại đây, giao diện tự cập nhật.

import SITE from "@/content/site.json";

export const BRAND = {
  name: "Ngọc Lâm Anh",
  headerName: "DU HỌC NGỌC LÂM ANH",
  fullName: "Trung tâm Du học Ngọc Lâm Anh",
  // Tên chữ Hán: 玉 (Ngọc) 林 (Lâm) 英 (Anh) + 留学 (du học) — đổi nếu trung tâm dùng tên khác
  zh: "玉林英留学",
  /** Chữ logo ở đầu trang: 2 dòng tiếng Việt, đổi qua lại với tên chữ Hán `zh` (1 dòng) */
  logoLines: ["Du học", "NGỌC LÂM ANH"],
  slogan: "Vươn tầm thế giới – Kiến tạo tương lai",
  tagline: "Ngôn ngữ vững vàng – Tương lai rộng mở",
  logoMark: "/sites/ngoc-lam-anh/logo-mark.png",
  logo: "/sites/ngoc-lam-anh/logo.png",
};

// ⚠️ ĐIỀN THÔNG TIN LIÊN HỆ THẬT VÀO ĐÂY.
// Trang tiengtrungchuongmy.com không công bố số điện thoại / địa chỉ / email.
// Khi `phone` còn để trống, nút "Gọi" và "Zalo" tạm dẫn tới trang Facebook.
/** Liên hệ: sửa trong dashboard (Nội dung trang) hoặc file src/content/site.json */
export const CONTACT = SITE.contact;

export const PHONE_LABEL = CONTACT.phoneLabel || CONTACT.phone || "[Số điện thoại]";
export const CALL_HREF = CONTACT.phone ? `tel:${CONTACT.phone}` : CONTACT.facebook;
export const ZALO_HREF = CONTACT.zalo || (CONTACT.phone ? `https://zalo.me/${CONTACT.phone}` : CONTACT.facebook);

/**
 * Blog / tin tức: trung tâm đăng bài trên Blogger (blogger.com) bằng tài khoản Google của trung tâm,
 * web tự lấy bài về trang /blog. Điền địa chỉ blog, ví dụ "https://duhocngoclamanh.blogspot.com".
 * Hướng dẫn: docs/HUONG-DAN-BLOG.md
 */
export const BLOG = {
  bloggerUrl: "https://tintucnla.blogspot.com",
  perPage: 9,
};

/**
 * Chuyển link kiểu trang gốc sang route nội bộ:
 *   "index.html" → "/",  "thi-thu.html#hskk" → "/thi-thu#hskk",  "dang-ky?khoa=x" → "/dang-ky?khoa=x"
 * Link http(s), tel:, mailto:, #anchor và "/..." giữ nguyên.
 */
export function href(path: string): string {
  if (/^(https?:|tel:|mailto:|#|\/)/.test(path)) return path;
  const [file, rest = ""] = path.split(/(?=[?#])/);
  const slug = file.replace(/\.(html|php)$/, "");
  return (slug === "" || slug === "index" ? "/" : `/${slug}`) + rest;
}

/** Slug của route hiện tại từ một href ("thi-thu.html#x" → "thi-thu") */
export function slugOf(path: string): string {
  return href(path).split(/[?#]/)[0].replace(/^\//, "");
}

export const REGISTER_HREF = "dang-ky";

export type NavLink = { label: string; href: string; className?: string; external?: boolean; id?: string };
export type NavItem = NavLink & { children?: NavLink[] };

// Cấu trúc menu giống trang mẫu; mọi trang đều nằm trong dự án này.
export const NAV: NavItem[] = [
  { label: "Trang chủ", href: "index.html" },
  {
    label: "Khóa học",
    href: "khoa-hoc.html",
    children: [
      { label: "Tiếng Trung giao tiếp", href: "khoa-hoc.html#giao-tiep" },
      { label: "Tiếng Trung thương mại", href: "khoa-hoc.html#thuong-mai" },
      { label: "Tiếng Trung trẻ em (YCT)", href: "khoa-hoc.html#yct" },
      { label: "Luyện thi HSK (HSK 1 – 9)", href: "khoa-hoc.html#hsk" },
      { label: "Luyện thi khối D4", href: "luyen-thi-d4.html" },
      { label: "Đăng ký học", href: "dang-ky.html" },
    ],
  },
  {
    label: "Đội ngũ",
    href: "index.html#doi-ngu",
    children: [
      { label: "Đội ngũ giáo viên", href: "index.html#doi-ngu" },
      { label: "Cảm nhận học viên", href: "index.html#cam-nhan" },
    ],
  },
  { label: "Du học", href: "index.html#du-hoc" },
  { label: "Tin tức", href: "blog" },
  {
    label: "Thi thử HSK",
    href: "thi-thu.html",
    children: [
      { label: "HSK 2.0 (6 cấp)", href: "thi-thu.html#hsk20" },
      { label: "Thi nói HSKK (3 cấp)", href: "thi-thu.html#hskk" },
      { label: "HSK 3.0 (9 cấp)", href: "thi-thu.html#hsk30" },
      { label: "Thi nói HSK 3.0 (cấp 3–6)", href: "thi-thu.html#hskk30" },
    ],
  },
  {
    label: "Tài liệu",
    href: "tai-lieu.html",
    children: [
      { label: "Giáo án giảng dạy", href: "tai-lieu.html#giao-an" },
      { label: "Video giảng dạy", href: "video-giang-day.html" },
      { label: "🎓 Khóa học online", href: "khoa-hoc-online.html" },
      { label: "Bài giảng trình chiếu", href: "trinh-chieu.html" },
      { label: "Tài liệu giáo trình", href: "tai-lieu.html#giao-trinh" },
      { label: "Tài liệu tiếng Trung", href: "sach-tieng-trung.html" },
      { label: "Tài liệu chuyên ngành", href: "tai-lieu.html#chuyen-nganh" },
      { label: "📚 Từ vựng chuyên ngành (PDF)", href: "tu-vung-chuyen-nganh.html" },
      { label: "Từ điển chuyên ngành", href: "tu-dien.html" },
      { label: "Từ điển AI Việt ⇄ Trung", href: "tu-dien-ai.html" },
      { label: "📒 Từ điển của tôi", href: "tu-dien-cua-toi.html" },
      { label: "Luyện nói phản xạ HSK1–6", href: "luyen-noi.html" },
    ],
  },
  { label: "Ôn tập từ vựng", href: "tu-vung.html" },
  { label: "Trò chơi", href: "tro-choi.html" },
  { label: "Bảng đen", href: "bang-den.html" },
  { label: "📝 Đăng ký học", href: "dang-ky.html", className: "m-only m-cta" },
  { label: `☎ Gọi ${PHONE_LABEL}`, href: CALL_HREF, className: "m-only" },
  { label: "💬 Nhắn Zalo", href: ZALO_HREF, className: "m-only", external: true },
  { label: "Đăng nhập", href: "dang-nhap.html", id: "navlogin" },
];

export type Course = {
  id: string;
  glyph: string;
  tag: string;
  title: string;
  /** Thời lượng nổi bật, ví dụ "20 buổi". Bỏ trống nếu chưa công bố. */
  months?: string;
  sessions?: string;
  intro: string;
  requirement?: string;
  audience?: string;
  schedule?: string;
  outcome?: string;
  syllabusTitle?: string;
  syllabus: string[];
  /** Đổi nhãn mặc định "Lịch học" / "Đầu ra" trên thẻ khóa học */
  scheduleLabel?: string;
  outcomeLabel?: string;
  cta?: string;
  ctaHref?: string;
};

export type CourseGroup = {
  id: string;
  tone: "light" | "red";
  zh: string;
  title: string;
  intro: string;
  courses: Course[];
};

export const PAGE_HEAD = {
  zh: "课程",
  title: "Khóa học tiếng Trung",
  intro:
    "Tiếng Trung giao tiếp, thương mại, trẻ em và luyện thi HSK 3.0. Học thử miễn phí, lớp 8 – 12 học viên, ca sáng – chiều – tối linh hoạt.",
};

export const JUMP_LINKS = [
  { label: "Tiếng Trung giao tiếp", href: "#giao-tiep" },
  { label: "Tiếng Trung thương mại", href: "#thuong-mai" },
  { label: "Tiếng Trung trẻ em", href: "#yct" },
  { label: "Tiếng Trung luyện thi HSK", href: "#hsk" },
];

export const COURSE_GROUPS: CourseGroup[] = [
  {
    id: "giao-tiep",
    tone: "light",
    zh: "汉语交际",
    title: "Tiếng Trung giao tiếp",
    intro:
      "Khóa 45 buổi theo giáo trình Msutong: bắt đầu từ làm quen phát âm và mẫu câu cơ bản, sau đó đi sâu từng chủ đề quen thuộc trong đời sống và công việc, luyện nghe – nói – phản xạ mỗi buổi cùng giáo viên.",
    courses: [
      {
        id: "tieng-trung-giao-tiep",
        glyph: "话",
        tag: "Giáo trình Msutong",
        title: "Tiếng Trung giao tiếp",
        months: "45 buổi",
        sessions: "giáo trình Msutong",
        intro:
          "Học từ số 0 đến giao tiếp được theo chủ đề. Không học dàn trải: mỗi buổi gắn với một tình huống thực tế, nói được và dùng được ngay.",
        audience: "Người mới bắt đầu, người đi làm cần nói tiếng Trung, học sinh – sinh viên chuẩn bị du học",
        schedule: "45 buổi · ca sáng – chiều – tối linh hoạt",
        outcome: "Phát âm chuẩn, nghe – nói tự tin theo các chủ đề đời sống và công việc quen thuộc",
        syllabusTitle: "Lộ trình học",
        syllabus: [
          "Làm quen: pinyin, thanh điệu, phát âm chuẩn và mẫu câu giao tiếp cơ bản",
          "Đi sâu theo chủ đề: bản thân, gia đình, mua sắm, ăn uống, đi lại, công việc…",
          "Phản xạ: đóng vai tình huống, hỏi – đáp nhanh, nghe hội thoại thực tế",
        ],
        cta: "Học thử miễn phí",
      },
    ],
  },
  {
    id: "thuong-mai",
    tone: "red",
    zh: "商务汉语",
    title: "Tiếng Trung thương mại",
    intro:
      "Tiếng Trung cho công việc: giao dịch, đàm phán và làm việc với đối tác Trung Quốc. Học theo tình huống thật của doanh nghiệp, đánh giá đầu vào để xếp lộ trình phù hợp.",
    courses: [
      {
        id: "tieng-trung-thuong-mai",
        glyph: "商",
        tag: "Người đi làm",
        title: "Tiếng Trung thương mại",
        intro:
          "Từ vựng và mẫu câu chuyên dùng trong kinh doanh, xuất nhập khẩu, mua hàng và bán hàng – để tự tin trao đổi trực tiếp với đối tác, không phụ thuộc phiên dịch.",
        audience: "Người đi làm, chủ kinh doanh, nhân viên xuất nhập khẩu – mua hàng – bán hàng làm việc với đối tác Trung Quốc",
        schedule: "Ca sáng – chiều – tối linh hoạt, phù hợp người đi làm",
        outcome: "Chào hàng, hỏi giá, báo giá, thương lượng, trao đổi đơn hàng và giao nhận bằng tiếng Trung",
        syllabusTitle: "Nội dung học",
        syllabus: [
          "Giới thiệu công ty, sản phẩm; tiếp khách và gọi điện công việc",
          "Hỏi giá, báo giá, đàm phán và chốt đơn hàng",
          "Thanh toán, vận chuyển, giao nhận và xử lý khiếu nại",
          "Đọc – viết tin nhắn, email và hợp đồng cơ bản",
        ],
        cta: "Đăng ký tư vấn miễn phí",
      },
    ],
  },
  {
    id: "yct",
    tone: "light",
    zh: "少儿汉语",
    title: "Tiếng Trung trẻ em (YCT)",
    intro:
      "Lộ trình YCT 1 – 6 dành cho trẻ em, học nối tiếp từng cấp; thời lượng là ước tính, điều chỉnh theo độ tuổi, năng lực đầu vào và tiến độ thực tế. Học phí trọn gói: YCT 0 – 2 là 4.599.000đ, YCT 0 – 3 là 6.999.000đ – giảm 499.000đ (còn 6.500.000đ) khi đăng ký ngay sau buổi học thử.",
    courses: [
      {
        id: "yct-1",
        glyph: "童",
        tag: "Giai đoạn 1",
        title: "YCT 1",
        months: "18 buổi",
        sessions: "ước tính",
        intro: "Làm quen Pinyin, thanh mẫu, vận mẫu và 4 thanh điệu; từ vựng cơ bản về bản thân, gia đình, số đếm, đồ vật quen thuộc; mẫu câu chào hỏi và giới thiệu đơn giản.",
        audience: "Trẻ em mới bắt đầu – xếp lớp theo độ tuổi và năng lực đầu vào",
        schedule: "Chào hỏi, giới thiệu bản thân; nhận biết đồ vật, số đếm và thông tin quen thuộc trong lớp học.",
        outcome: "Kiểm tra nghe nhận biết; phát âm từ/câu ngắn; hỏi – đáp theo mẫu; nhận diện từ và chữ Hán cơ bản.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Nhận biết âm, từ và câu rất ngắn; nghe hiểu lời chào, số đếm, thông tin cá nhân quen thuộc.",
          "Nói: Chào hỏi, giới thiệu tên; hỏi – đáp đơn giản về tuổi, đồ vật và thông tin cá nhân.",
          "Đọc: Nhận diện chữ Hán và từ đã học; đọc từ, cụm từ và câu cực ngắn có hỗ trợ.",
          "Viết: Tập viết nét cơ bản; nhận biết và viết một số chữ Hán/từ đơn giản theo mẫu.",
        ],
        cta: "Đăng ký học thử cho bé",
      },
      {
        id: "yct-2",
        glyph: "乐",
        tag: "Giai đoạn 1",
        title: "YCT 2",
        months: "22 buổi",
        sessions: "ước tính",
        intro: "Mở rộng vốn từ và mẫu câu theo chủ đề gia đình, trường học, thời gian, hoạt động hằng ngày; củng cố Pinyin, thanh điệu và cấu trúc câu cơ bản.",
        audience: "Trẻ đã học và nắm vững kiến thức YCT 1",
        schedule: "Giao tiếp trong lớp học, gia đình và sinh hoạt thường ngày; hỏi giờ, số lượng, sở thích và nhu cầu cơ bản.",
        outcome: "Đánh giá nghe – nói – đọc – viết ở mức cơ bản; làm quen dạng bài YCT phù hợp; mục tiêu hướng tới YCT 2.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu câu và hội thoại ngắn về chủ đề quen thuộc; nghe lấy thông tin đơn giản như người, đồ vật, số lượng và hoạt động.",
          "Nói: Trao đổi thông tin cá nhân; nói về gia đình, sở thích, trường lớp và nhu cầu thường ngày bằng câu đơn giản.",
          "Đọc: Đọc từ, câu và đoạn rất ngắn theo chủ đề; tìm thông tin trực tiếp trong nội dung đã học.",
          "Viết: Viết từ và câu đơn giản theo mẫu; sắp xếp từ thành câu; hoàn thành thông tin cá nhân.",
        ],
        cta: "Đăng ký học thử cho bé",
      },
      {
        id: "yct-3",
        glyph: "趣",
        tag: "Giai đoạn 2",
        title: "YCT 3",
        months: "30 buổi",
        sessions: "ước tính",
        intro: "Mở rộng vốn từ theo chủ đề đời sống; củng cố cấu trúc câu; học cách diễn đạt nhu cầu, sở thích, kế hoạch và trải nghiệm đơn giản.",
        audience: "Trẻ đã học qua YCT 1 – 2 và nắm vững kiến thức YCT 2",
        schedule: "Trao đổi trong tình huống mua sắm, ăn uống, trường học, vui chơi và sinh hoạt hằng ngày.",
        outcome: "Bài đánh giá theo kỹ năng; hội thoại theo tình huống; đọc hiểu và viết đoạn ngắn; đánh giá mức độ sẵn sàng YCT 3.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu nội dung chính của hội thoại ngắn và thông tin quen thuộc; nghe xác định người, thời gian, địa điểm và hoạt động.",
          "Nói: Duy trì hội thoại về học tập, gia đình, bạn bè và sinh hoạt; kể lại sự việc hoặc trình bày kế hoạch đơn giản.",
          "Đọc: Đọc câu và đoạn ngắn về chủ đề quen thuộc; xác định ý chính và thông tin cụ thể.",
          "Viết: Viết câu và đoạn ngắn có gợi ý; mô tả người, vật, hoạt động và thông tin quen thuộc.",
        ],
        cta: "Đăng ký học thử cho bé",
      },
      {
        id: "yct-4",
        glyph: "星",
        tag: "Giai đoạn 2",
        title: "YCT 4",
        months: "35 buổi",
        sessions: "ước tính",
        intro: "Mở rộng và hệ thống hóa từ vựng; sử dụng cấu trúc câu đa dạng hơn; luyện diễn đạt, liên kết ý và xử lý tình huống giao tiếp quen thuộc.",
        audience: "Trẻ đã học qua YCT 1 – 3 và nắm vững kiến thức YCT 3",
        schedule: "Giao tiếp tự tin hơn trong học tập, hoạt động xã hội, du lịch và các tình huống thường gặp.",
        outcome: "Luyện đề mô phỏng; đánh giá đủ kỹ năng; chỉ khuyến nghị dự thi YCT 4 khi kết quả kiểm tra đầu ra đáp ứng yêu cầu.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu hội thoại và đoạn nghe dài hơn về các chủ đề quen thuộc; xác định ý chính, chi tiết và mục đích giao tiếp.",
          "Nói: Trình bày ý kiến, mô tả sự việc, kể trải nghiệm và trao đổi thông tin tương đối độc lập trong tình huống quen thuộc.",
          "Đọc: Đọc hiểu đoạn văn phù hợp cấp độ; tìm thông tin, hiểu quan hệ giữa các ý và nội dung chính.",
          "Viết: Viết câu và đoạn văn ngắn có bố cục; hoàn thành nội dung theo yêu cầu và sử dụng từ/cấu trúc phù hợp.",
        ],
        cta: "Đăng ký học thử cho bé",
      },
      {
        id: "yct-5",
        glyph: "飞",
        tag: "Giai đoạn 3",
        title: "YCT 5",
        intro: "Mở rộng từ vựng theo chủ đề học tập, văn hóa và xã hội; luyện đọc đoạn văn dài hơn; diễn đạt ý kiến, so sánh và giải thích bằng câu ghép.",
        audience: "Trẻ đã học qua YCT 1 – 4 và nắm vững kiến thức YCT 4",
        schedule: "Thuyết trình ngắn trước lớp, kể chuyện, trao đổi về học tập, sở thích và các hoạt động ngoại khóa.",
        outcome: "Luyện đề mô phỏng YCT 5; đánh giá đủ 4 kỹ năng; chỉ khuyến nghị dự thi khi kết quả kiểm tra đầu ra đáp ứng yêu cầu.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu hội thoại, câu chuyện và đoạn giới thiệu dài; nắm ý chính, chi tiết và thái độ người nói.",
          "Nói: Kể chuyện, thuyết trình ngắn; nêu ý kiến, so sánh và giải thích lý do.",
          "Đọc: Đọc hiểu câu chuyện, thông báo, bài văn ngắn; suy luận ý không nói trực tiếp.",
          "Viết: Viết đoạn văn có mở – thân – kết về chủ đề quen thuộc; dùng từ nối và câu ghép.",
        ],
        cta: "Đăng ký học thử cho bé",
      },
      {
        id: "yct-6",
        glyph: "梦",
        tag: "Giai đoạn 3",
        title: "YCT 6",
        intro: "Hoàn thiện lộ trình YCT: củng cố toàn bộ ngữ pháp và từ vựng, luyện diễn đạt mạch lạc, tự tin và chuẩn bị nền tảng để học tiếp HSK.",
        audience: "Trẻ đã học qua YCT 1 – 5 và nắm vững kiến thức YCT 5",
        schedule: "Giao tiếp độc lập trong học tập và sinh hoạt; trình bày, thảo luận nhóm; sẵn sàng chuyển tiếp sang HSK.",
        outcome: "Luyện đề mô phỏng YCT 6; đánh giá đủ 4 kỹ năng; định hướng lộ trình HSK tiếp theo.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu nội dung dài, tốc độ gần tự nhiên về đời sống, học tập và văn hóa.",
          "Nói: Trình bày, thảo luận và bảo vệ ý kiến mạch lạc, tự tin.",
          "Đọc: Đọc hiểu bài văn, truyện ngắn; nắm ý chính, chi tiết và ý nghĩa.",
          "Viết: Viết bài văn ngắn có bố cục rõ ràng, diễn đạt tự nhiên.",
        ],
        cta: "Đăng ký học thử cho bé",
      },
    ],
  },
  {
    id: "hsk",
    tone: "red",
    zh: "汉语水平考试",
    title: "Luyện thi HSK 3.0 (HSK 1 – 9)",
    intro:
      "Chương trình luyện thi HSK theo chuẩn HSK 3.0: lộ trình sơ cấp – trung cấp – cao cấp theo Khung tiêu chuẩn năng lực tiếng Trung quốc tế GF0025-2021. Số từ là tổng tích lũy đến cấp độ đó. Đánh giá đầu vào trước khi xếp lớp, đánh giá giữa khóa và cuối khóa theo 4 kỹ năng.",
    courses: [
      {
        id: "hsk-1",
        glyph: "一",
        tag: "Sơ cấp",
        title: "HSK 1",
        months: "22 buổi",
        sessions: "khoảng 500 từ",
        intro: "Pinyin; thanh mẫu, vận mẫu, thanh điệu; chữ Hán cơ bản; từ vựng và ngữ pháp nền tảng.",
        audience: "Người mới bắt đầu học tiếng Trung",
        schedule: "Giao tiếp bước đầu trong chào hỏi, ăn uống, mua sắm, thời tiết, hỏi giờ.",
        outcome: "Bài kiểm tra từ vựng – ngữ pháp; nghe nhận biết; hội thoại giới thiệu; viết câu đơn.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Nhận biết từ, câu và thông tin rất ngắn, quen thuộc.",
          "Nói: Chào hỏi, giới thiệu bản thân, gia đình, sở thích; trả lời câu hỏi đơn giản.",
          "Đọc: Nhận diện chữ Hán, đọc từ, câu và đoạn cực ngắn.",
          "Viết: Viết chữ Hán cơ bản, thông tin cá nhân và câu đơn.",
        ],
        cta: "Test trình độ miễn phí",
      },
      {
        id: "hsk-2",
        glyph: "二",
        tag: "Sơ cấp",
        title: "HSK 2",
        months: "22 buổi",
        sessions: "khoảng 1.272 từ",
        intro: "Mở rộng từ vựng; cấu trúc câu cơ bản; câu hỏi, phủ định, thời gian và lượng từ.",
        audience: "Học viên đã học qua HSK 1 và có nền tảng HSK 1 vững",
        schedule: "Giao tiếp trong sinh hoạt, học tập, mua sắm và du lịch cơ bản.",
        outcome: "Nghe hiểu hội thoại; đóng vai tình huống; đọc hiểu; viết đoạn ngắn.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu hội thoại ngắn về sinh hoạt và tình huống quen thuộc.",
          "Nói: Trao đổi thông tin, nhu cầu và kế hoạch đơn giản.",
          "Đọc: Đọc câu và đoạn ngắn về chủ đề quen thuộc.",
          "Viết: Viết câu đơn, câu nối đơn giản và đoạn ngắn có gợi ý.",
        ],
        cta: "Test trình độ miễn phí",
      },
      {
        id: "hsk-3",
        glyph: "三",
        tag: "Sơ cấp",
        title: "HSK 3",
        months: "40 buổi",
        sessions: "khoảng 2.245 từ",
        intro: "Củng cố ngữ pháp sơ cấp; mở rộng cấu trúc câu và cách diễn đạt ý kiến.",
        audience: "Học viên đã học qua HSK 2 và có nền tảng HSK 2 vững",
        schedule: "Du lịch, sinh hoạt và trao đổi cơ bản; tạo nền tảng học tập tiếp theo.",
        outcome: "Nghe lấy ý chính; phỏng vấn/hội thoại; đọc hiểu; viết đoạn theo chủ đề.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu nội dung chính của hội thoại và thông tin quen thuộc có độ dài vừa phải.",
          "Nói: Duy trì hội thoại về đời sống, học tập, công việc; kể trải nghiệm và kế hoạch.",
          "Đọc: Đọc hiểu đoạn văn về chủ đề quen thuộc, xác định ý chính và thông tin cụ thể.",
          "Viết: Viết đoạn ngắn, thư/tin nhắn và nội dung mô tả đơn giản.",
        ],
        cta: "Test trình độ miễn phí",
      },
      {
        id: "hsk-4",
        glyph: "四",
        tag: "Trung cấp",
        title: "HSK 4",
        months: "45 buổi",
        sessions: "khoảng 3.245 từ",
        intro: "Ngữ pháp trung cấp; từ vựng xã hội, giáo dục, công việc; liên kết ý.",
        audience: "Học viên đã học qua HSK 3 và có nền tảng HSK 3 vững",
        schedule: "Học tập, giao tiếp xã hội và xử lý công việc quen thuộc bằng tiếng Trung.",
        outcome: "Nghe hiểu; thuyết trình ngắn; đọc văn bản; viết bài có bố cục.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu hội thoại và nội dung trao đổi tương đối phong phú.",
          "Nói: Trình bày ý kiến, giải thích vấn đề, kể lại sự việc và trao đổi công việc quen thuộc.",
          "Đọc: Đọc bài viết, thông báo và tài liệu có nội dung đa dạng hơn.",
          "Viết: Viết bài/đoạn có bố cục, mô tả và nêu quan điểm.",
        ],
        cta: "Test trình độ miễn phí",
      },
      {
        id: "hsk-5",
        glyph: "五",
        tag: "Trung cấp",
        title: "HSK 5",
        months: "60 buổi",
        sessions: "khoảng 4.316 từ",
        intro: "Ngữ pháp trung – cao cấp; từ vựng trừu tượng và theo lĩnh vực; sắc thái diễn đạt.",
        audience: "Học viên đã học qua HSK 4 và có nền tảng HSK 4 vững",
        schedule: "Sử dụng trong môi trường doanh nghiệp, học tập và giao tiếp chuyên sâu.",
        outcome: "Nghe nội dung dài; thuyết trình; đọc phân tích; viết bài luận/báo cáo.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu nội dung dài hơn, thông tin truyền thông và trao đổi tương đối chuyên sâu.",
          "Nói: Giao tiếp linh hoạt; thuyết trình, giải thích và bảo vệ quan điểm.",
          "Đọc: Đọc báo chí, văn bản và tài liệu có cấu trúc, lập luận.",
          "Viết: Viết bài luận, báo cáo, thư tín và văn bản có lập luận.",
        ],
        cta: "Test trình độ miễn phí",
      },
      {
        id: "hsk-6",
        glyph: "六",
        tag: "Trung cấp",
        title: "HSK 6",
        months: "75 buổi",
        sessions: "khoảng 5.456 từ",
        intro: "Ngữ pháp cao cấp; từ vựng phong phú; cấu trúc phức; phong cách và sắc thái.",
        audience: "Học viên đã học qua HSK 5 và có nền tảng HSK 5 vững",
        schedule: "Học thuật, doanh nghiệp, nghiên cứu và giao tiếp chuyên môn.",
        outcome: "Nghe phân tích; tranh luận; đọc hiểu chuyên sâu; bài viết lập luận.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu nội dung dài, tốc độ tự nhiên và nhiều lớp thông tin.",
          "Nói: Diễn đạt tự nhiên; phân tích, tranh luận và bảo vệ quan điểm.",
          "Đọc: Đọc văn bản dài, nội dung chuyên sâu và tài liệu học thuật phù hợp.",
          "Viết: Viết bài phân tích, báo cáo và văn bản lập luận chặt chẽ.",
          "Ứng dụng: Có khả năng tham gia các hoạt động chuyên môn bằng tiếng Trung, dịch thuật trong các lĩnh vực chuyên môn thông thường.",
        ],
        cta: "Test trình độ miễn phí",
      },
      {
        id: "hsk-7-9",
        glyph: "高",
        tag: "Cao cấp",
        title: "HSK 7 – 9",
        months: "230 buổi",
        sessions: "khoảng 11.092 từ",
        intro: "Hệ thống ngôn ngữ nâng cao; thành ngữ, sắc thái, phong cách; từ vựng học thuật và chuyên ngành.",
        audience: "Học viên đã hoàn thành HSK 6 với nền tảng vững, mục tiêu học thuật, nghiên cứu, dịch thuật",
        schedule: "Nghiên cứu, học thuật, quản lý, giao tiếp quốc tế và dịch thuật theo chuyên môn.",
        outcome: "Bài nghe chuyên sâu; thuyết trình/phản biện; đọc phân tích; viết học thuật; bài dịch.",
        syllabusTitle: "Chuẩn đầu ra 4 kỹ năng",
        scheduleLabel: "Ứng dụng thực tế",
        outcomeLabel: "Đánh giá đầu ra",
        syllabus: [
          "Nghe: Hiểu bài giảng, hội thảo, diễn thuyết và nội dung chuyên sâu.",
          "Nói: Giao tiếp linh hoạt; trình bày, phản biện, tranh luận và diễn đạt tinh tế.",
          "Đọc: Đọc tài liệu học thuật, nghiên cứu, văn bản chuyên ngành và tác phẩm văn học.",
          "Viết: Viết luận chuyên sâu, báo cáo nghiên cứu và văn bản học thuật.",
          "Ứng dụng: Làm việc chuyên môn hoàn toàn bằng tiếng Trung; biên – phiên dịch trong lĩnh vực chuyên ngành.",
        ],
        cta: "Test trình độ miễn phí",
      },
    ],
  },
  {
    id: "du-hoc",
    tone: "light",
    zh: "中国留学",
    title: "Du học Trung Quốc",
    intro:
      "Định hướng đúng ngay từ đầu – mở cánh cửa tương lai. Tư vấn miễn phí, hỗ trợ tìm trường, học bổng và lộ trình học phù hợp.",
    courses: [
      {
        id: "tu-van-du-hoc",
        glyph: "留",
        tag: "Du học & học bổng",
        title: "Tư vấn du học",
        months: "Học bổng",
        sessions: "CIS · CSC · Tỉnh · Trường",
        intro:
          "Tư vấn trung thực, rõ ràng, không chèo kéo. Trung tâm chọn hệ, chọn trường theo lực học, viết kế hoạch học tập và thư giới thiệu, luyện phỏng vấn và đồng hành đến khi nhập học tại Trung Quốc.",
        audience: "1 năm tiếng 18 – 35 tuổi · Đại học 18 – 22 tuổi · Thạc sĩ 25 – 35 tuổi",
        schedule: "Hệ 1 năm tiếng, đại học, thạc sĩ, tiến sĩ và hệ tự túc",
        outcome: "Học bổng toàn phần: miễn 100% học phí, ký túc xá, trợ cấp đến 3.500 tệ/tháng",
        syllabusTitle: "Điều kiện tham khảo",
        syllabus: [
          "Hệ tự túc: GPA 6.5 – 9.0 tùy trường, HSK3 trở lên (HSK4 vào thẳng chuyên ngành), giấy khám sức khỏe",
          "Học bổng trường 1 năm tiếng: HSK4, GPA 6.5 (bán phần: nên có nền HSK3)",
          "Học bổng tỉnh đại học: HSK5 từ 210 điểm + HSKK cao cấp 60",
          "Học bổng CIS đại học: HSK5 từ 240 + HSKK cao cấp 65 hoặc HSK6 từ 210, tín chỉ CSCA, GPA 8.0",
          "Apply nhiều trường, nhiều loại học bổng không phát sinh thêm phí",
        ],
        cta: "Đăng ký tư vấn du học",
      },
    ],
  },
];

export const GENERAL_INFO =
  "Lớp 8 – 12 học viên để giáo viên theo sát từng người. Học trực tuyến hoặc offline tại cơ sở, ca sáng – chiều – tối linh hoạt. Test trình độ và học thử miễn phí. Cam kết lớp không quá 12 học viên – hoàn tiền nếu không đạt đầu ra.";

export const COMMITMENTS = [
  "Lộ trình cá nhân hóa – học đúng mục tiêu",
  "Dạy để dùng thực tế – không chỉ để thi",
  "Tư vấn du học trung thực, không chèo kéo",
  "Đồng hành lâu dài sau khóa học",
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Khóa học", href: "khoa-hoc.html" },
  { label: "Thi thử HSK", href: "thi-thu.html" },
  { label: "Tin tức", href: "blog" },
  { label: "Tài liệu", href: "tai-lieu.html" },
  { label: "Ôn tập từ vựng", href: "tu-vung.html" },
  { label: "Luyện nói phản xạ", href: "luyen-noi.html" },
  { label: "Từ điển chuyên ngành", href: "tu-dien.html" },
  { label: "Từ điển AI Việt ⇄ Trung", href: "tu-dien-ai.html" },
  { label: "Đăng ký học", href: "dang-ky.html" },
  { label: "Đăng nhập", href: "dang-nhap.html" },
];
