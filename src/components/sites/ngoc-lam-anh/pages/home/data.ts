// Nội dung trang chủ Du học Ngọc Lâm Anh.
// Nguồn: https://tiengtrungchuongmy.com/ (trang chủ, /du-hoc/, /doi-ngu-giao-vien/ và trang từng giáo viên).
// Ô có dạng "[...]" là chỗ trung tâm cần điền nội dung thật — đừng thay bằng nội dung bịa.

import SITE from "@/content/site.json";
import { CONTACT } from "../../data";

const IMG = "/sites/ngoc-lam-anh/home";

export const HERO = {
  // "Ngôn ngữ vững vàng – Tương lai rộng mở" viết bằng chữ Hán
  motto: "语言扎实 · 未来广阔",
  pre: "Trung tâm",
  lead:
    "Hệ thống đào tạo tiếng Trung bài bản và tư vấn du học tận tâm. Chúng tôi đồng hành cùng bạn chinh phục tri thức, mở lối thành công.",
  places: [
    { label: "Cơ sở", text: CONTACT.address },
    { label: "Hình thức", text: "Trực tuyến · Offline tại cơ sở" },
    { label: "Lớp học", text: "8 – 12 học viên" },
  ],
  art: {
    bigChar: "玉",
    seal: "玉林",
    person: `${IMG}/hero-nguyen-thi-hang.webp`,
    personAlt: "Giáo viên Nguyễn Thị Hằng – Trung tâm Du học Ngọc Lâm Anh",
    name: "Nguyễn Thị Hằng",
    role: "Giảng viên · HSK6 – HSKK cao cấp",
    badge: { value: "25", label: "năm kinh nghiệm" },
  },
};

export const STATS = [
  { value: "25", label: "năm kinh nghiệm đào tạo" },
  { value: "8 – 12", label: "học viên mỗi lớp" },
  { value: "10", label: "giáo viên tiếng Trung" },
  { value: "100%", label: "học bổng du học tối đa" },
];

export const COURSES_HEAD = {
  zh: "热门课程",
  title: "Các khóa học",
  intro:
    "Tiếng Trung giao tiếp, tiếng Trung thương mại, tiếng Trung trẻ em và luyện thi HSK theo chuẩn HSK 3.0 (HSK 1 – 9). Học thử miễn phí, lịch học linh hoạt sáng – chiều – tối, lộ trình bài bản phù hợp với mọi trình độ và mục tiêu học tập.",
};

/** Học phí chưa được công bố — trung tâm điền theo id khóa học (id trong COURSE_GROUPS). */
export const COURSE_FEES: Record<string, string> = SITE.courseFees;

/** Khóa học hiện trên trang chủ (đủ danh sách ở trang Khóa học) */
export const HOME_COURSE_IDS = ["tieng-trung-giao-tiep", "tieng-trung-thuong-mai", "yct-1", "hsk-1", "hsk-3", "hsk-4"];
export const FEE_PLACEHOLDER = "[Học phí]";

export const PATH = {
  zh: "学习路线",
  title: "Lộ trình học",
  intro: "Từ sơ cấp đến cao cấp theo Khung tiêu chuẩn năng lực tiếng Trung quốc tế GF0025-2021.",
  steps: [
    { ic: "初", title: "HSK 1 – 2", goal: "Sơ cấp", text: "44 buổi · khoảng 1.272 từ" },
    { ic: "三", title: "HSK 3", goal: "Sơ cấp", text: "40 buổi · khoảng 2.245 từ" },
    { ic: "四", title: "HSK 4", goal: "Trung cấp", text: "45 buổi · khoảng 3.245 từ" },
    { ic: "五", title: "HSK 5 – 6", goal: "Trung cấp", text: "135 buổi · khoảng 5.456 từ" },
    { ic: "高", title: "HSK 7 – 9", goal: "Cao cấp", text: "230 buổi · khoảng 11.092 từ" },
  ],
};

export const WHYS = {
  zh: "为什么选择玉林英",
  title: "Vì sao chọn Ngọc Lâm Anh",
  items: [
    {
      ic: "路",
      title: "Lộ trình học cá nhân hóa",
      text: "Học đúng mục tiêu, không học lan man: định hướng theo năng lực, điều kiện và mục tiêu riêng (thi chứng chỉ, du học, làm việc…).",
    },
    {
      ic: "用",
      title: "Dạy để sử dụng thực tế",
      text: "Không chỉ để thi: tập trung vào khả năng ứng dụng tiếng Trung trong học tập, công việc và môi trường Hoa ngữ.",
    },
    {
      ic: "留",
      title: "Tư vấn du học trung thực",
      text: "Rõ ràng, không chèo kéo: hướng dẫn chọn con đường phù hợp nhất thay vì các chương trình không cần thiết.",
    },
    {
      ic: "伴",
      title: "Đồng hành lâu dài",
      text: "Không bỏ rơi sau khóa học: trung tâm là người dẫn đường xuyên suốt hành trình học tập và phát triển.",
    },
  ],
};

export type Teacher = {
  name: string;
  photo: string;
  role: string;
  bio: string;
  chips: string[];
  /** Trang hồ sơ trên tiengtrungchuongmy.com */
  url: string;
};

const PROFILE = "https://tiengtrungchuongmy.com/";

export const TEAM_HEAD = {
  zh: "教师团队",
  title: "Đội ngũ giáo viên",
  intro: "Không chỉ dạy ngôn ngữ, đội ngũ giúp học viên hiểu cách tư duy, giao tiếp và sử dụng tiếng Trung trong thực tế.",
};

export const LEAD_TEACHER: Teacher & { ribbon: string } = {
  name: "Nguyễn Thị Hằng",
  photo: `${IMG}/nguyen-thi-hang.png`,
  ribbon: "Giảng viên",
  role: "Giảng viên · 8 năm giảng dạy & nghiên cứu",
  bio: "Tốt nghiệp Đại học Hà Nội chuyên ngành Ngôn ngữ Trung Quốc (GPA 3.46), HSK6 – HSKK cao cấp. Nghiên cứu Hán ngữ hiện đại, tham gia nhiều hội thảo quốc tế và tư vấn chương trình đào tạo chuẩn NEW HSK.",
  chips: ["HSK6", "HSKK cao cấp", "NEW HSK", "8 năm kinh nghiệm"],
  url: `${PROFILE}giang-vien-5-thay-quan/`,
};

export const TEACHERS: Teacher[] = [
  {
    name: "Lê Thị Mai Hương",
    photo: `${IMG}/le-thi-mai-huong.webp`,
    role: "Giáo viên · HSK5",
    bio: "Cử nhân loại giỏi Ngôn ngữ Trung Quốc, ĐH Sư phạm Hà Nội 2. Giải nhì cuộc thi Trí tuệ Ngoại ngữ.",
    chips: ["HSK5", "Trẻ em", "HSK 1 – 5"],
    url: `${PROFILE}giao-vien-le-thi-mai-huong/`,
  },
  {
    name: "Nguyễn Thị Thúy",
    photo: `${IMG}/nguyen-thi-thuy.webp`,
    role: "Giáo viên · HSK6",
    bio: "Cử nhân Ngôn ngữ Trung Quốc, Trường Đại học Hà Nội. Tham gia trại hè tại các trường ở Trung Quốc.",
    chips: ["HSK6", "Trẻ em", "HSK 1 – 5"],
    url: `${PROFILE}giao-vien-nguyen-thi-thuy/`,
  },
  {
    name: "Nguyễn Thị Quỳnh Anh",
    photo: `${IMG}/nguyen-thi-quynh-anh.webp`,
    role: "Giáo viên · HSK5",
    bio: "Cử nhân loại giỏi (GPA 3.5) Ngôn ngữ Trung Quốc, Trường Đại học Hà Nội.",
    chips: ["HSK5", "Trẻ em", "HSK 1 – 4"],
    url: `${PROFILE}giao-vien-nguyen-thi-quynh-anh/`,
  },
  {
    name: "Khuất Thị Xuân Mai",
    photo: `${IMG}/khuat-thi-xuan-mai.png`,
    role: "Giáo viên · HSK5",
    bio: "Cử nhân loại giỏi (GPA 3.5) Kinh tế đối ngoại, Học viện Chính sách và Phát triển.",
    chips: ["HSK5", "Trẻ em", "HSK 1 – 4"],
    url: `${PROFILE}giao-vien-khuat-thi-xuan-mai/`,
  },
  {
    name: "Nguyễn Thị Trang",
    photo: `${IMG}/nguyen-thi-trang.webp`,
    role: "Giáo viên · HSK5",
    bio: "Cử nhân loại giỏi (GPA 3.5) Trung Quốc học, Đại học Sư phạm Hà Nội.",
    chips: ["HSK5", "Trẻ em", "HSK 1 – 4"],
    url: `${PROFILE}giao-vien-nguyen-thi-trang-2/`,
  },
  {
    name: "Bùi Thị Kiều Trang",
    photo: `${IMG}/bui-thi-kieu-trang.webp`,
    role: "Giáo viên · HSK5",
    bio: "Cử nhân loại giỏi (GPA 3.5) Trung Quốc học, Đại học Phương Đông.",
    chips: ["HSK5", "Trẻ em", "HSK 1 – 5"],
    url: `${PROFILE}giao-vien-nguyen-thi-trang/`,
  },
  {
    name: "Nguyễn Lam Anh",
    photo: `${IMG}/nguyen-lam-anh.jpg`,
    role: "Giáo viên · 6 năm giảng dạy",
    bio: "Tốt nghiệp Đại học Nam Kinh. Dạy tiếng Trung trẻ em & giao tiếp bằng phương pháp trực quan, giúp phát âm chuẩn ngay từ đầu.",
    chips: ["Trẻ em", "Giao tiếp", "Phát âm"],
    url: `${PROFILE}giang-vien-3-thay-minh/`,
  },
  {
    name: "Trần Thị Phương",
    photo: `${IMG}/tran-thi-phuong.jpg`,
    role: "Giáo viên · HSK5",
    bio: "Cử nhân loại giỏi (GPA 3.56) Trung Quốc học, ĐH KHXH&NV – ĐHQGHN. Trại hè tại ĐH Hạ Môn, ĐH KH Kỹ thuật Hoa Trung.",
    chips: ["HSK5", "Trẻ em", "HSK 1 – 3"],
    url: `${PROFILE}giang-vien-2-co-linh/`,
  },
  {
    name: "Tống Thị Thu Hằng",
    photo: `${IMG}/tong-thi-thu-hang.webp`,
    role: "Giáo viên · 5 năm giảng dạy",
    bio: "Tốt nghiệp Trường Đại học Mở Hà Nội, khoa tiếng Trung, HSK5.",
    chips: ["HSK5", "5 năm kinh nghiệm"],
    url: `${PROFILE}giang-vien-1-thay-nam/`,
  },
];

export const ONLINE = {
  zh: "学习资源",
  title: "Học online cùng Ngọc Lâm Anh",
  intro: "Thi thử HSK, tài liệu, ôn từ vựng và khóa học online ngay trên web.",
  tiles: [
    { ic: "考", title: "Thi thử HSK", text: "Đề HSK 2.0 và HSK 3.0, chấm điểm tự động.", href: "thi-thu.html" },
    { ic: "书", title: "Tài liệu", text: "Giáo án giảng dạy và tài liệu giáo trình HSK.", href: "tai-lieu.html" },
    { ic: "词", title: "Ôn tập từ vựng", text: "Thẻ học, trò chơi và kiểm tra từ vựng theo cấp HSK.", href: "tu-vung.html" },
    { ic: "课", title: "Khóa học online", text: "Video bài giảng kèm luyện từ vựng, kiểm tra và bài tập.", href: "khoa-hoc-online.html" },
    { ic: "板", title: "Bảng đen giảng dạy", text: "Dành cho giáo viên: gõ chữ Hán tự hiện pinyin, nghĩa, nét viết.", href: "bang-den.html" },
  ],
};

/**
 * Cảm nhận học viên.
 * Các mục `sample: true` là NỘI DUNG MINH HỌA do trợ lý soạn (chưa phải lời của học viên thật) và hiện kèm nhãn
 * "Minh họa" trên web. Khi có chia sẻ thật (được học viên đồng ý), thay nội dung, tên, khóa học và đặt `sample: false`.
 */
export type Testimonial = { quote: string; name: string; course: string; initials: string; sample: boolean };
export const TESTIMONIALS_HEAD = {
  zh: "学员评价",
  title: "Cảm nhận của học viên",
  intro: "Hành trình học tiếng Trung và du học cùng Ngọc Lâm Anh.",
};
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Em bắt đầu từ con số 0, học giao tiếp rồi lên HSK4 trong khoảng một năm. Lớp nhỏ nên cô sửa phát âm cho từng người, giờ em tự tin nói chuyện với người Trung hơn hẳn.",
    name: "Minh Anh",
    course: "Luyện thi HSK4",
    initials: "MA",
    sample: true,
  },
  {
    quote:
      "Trung tâm tư vấn cho em apply cả học bổng CIS và học bổng tỉnh để không bị trượt hết. Kế hoạch học tập và thư giới thiệu đều được thầy cô viết giúp, em chỉ cần ôn kỹ để phỏng vấn online.",
    name: "Quang Huy",
    course: "Du học hệ đại học",
    initials: "QH",
    sample: true,
  },
  {
    quote:
      "Em cần HSKK cao cấp để đủ điều kiện học bổng thạc sĩ. Các buổi luyện nói phản xạ và luyện phỏng vấn giúp em bình tĩnh hơn rất nhiều khi nói chuyện với giáo sư.",
    name: "Thu Trang",
    course: "Du học thạc sĩ",
    initials: "TT",
    sample: true,
  },
  {
    quote:
      "Công việc của tôi phải trao đổi với đối tác Trung Quốc. Học giao tiếp theo chủ đề, ca tối linh hoạt nên đi làm vẫn theo kịp, giờ tôi đã tự đàm phán được những nội dung cơ bản.",
    name: "Đức Thắng",
    course: "Tiếng Trung giao tiếp",
    initials: "ĐT",
    sample: true,
  },
  {
    quote:
      "Lần đầu cho con đi du học xa nhà, gia đình rất lo. Trung tâm giải thích rõ từng khoản chi phí, lịch nộp hồ sơ và hỗ trợ cả việc chuẩn bị trước khi bay, nên cả nhà yên tâm hơn nhiều.",
    name: "Chị Hương",
    course: "Phụ huynh học sinh du học",
    initials: "H",
    sample: true,
  },
  {
    quote:
      "Em học 1 năm tiếng trước khi vào chuyên ngành. Nhờ có nền HSK4 từ trung tâm nên em theo kịp lớp bên Trung Quốc ngay từ những tuần đầu.",
    name: "Ngọc Mai",
    course: "Du học 1 năm tiếng",
    initials: "NM",
    sample: true,
  },
];

/** Ảnh hoạt động: điền `src` (đặt ảnh trong public/sites/ngoc-lam-anh/home/) và chú thích. */
export type GalleryItem = { src?: string; caption: string };
export const GALLERY_HEAD = { zh: "中心活动", title: "Hoạt động trung tâm" };
export const GALLERY: GalleryItem[] = [
  { caption: "[Ảnh hoạt động] Giờ học tại trung tâm" },
  { caption: "[Ảnh hoạt động]" },
  { caption: "[Ảnh hoạt động]" },
  { caption: "[Ảnh hoạt động]" },
  { caption: "[Ảnh hoạt động]" },
  { caption: "[Ảnh hoạt động]" },
];

export const CTA = {
  title: "Bắt đầu học tiếng Trung ngay hôm nay",
  text: "Để lại thông tin, trung tâm sẽ gọi tư vấn lịch học và lộ trình phù hợp.",
};
