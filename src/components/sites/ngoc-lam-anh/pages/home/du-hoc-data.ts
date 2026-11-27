// Thông tin du học Trung Quốc của Trung tâm Du học Ngọc Lâm Anh.
// Nguồn: tài liệu "TƯ VẤN DU HỌC TQ" của trung tâm (11/2026). Trợ cấp tính bằng tệ (NDT).

export const DU_HOC = {
  zh: "中国留学",
  title: "Du học Trung Quốc",
  intro:
    "Tư vấn chọn hệ học, chọn trường và săn học bổng CIS, CSC, học bổng tỉnh, học bổng trường. Trung tâm lo hồ sơ, kế hoạch học tập và đồng hành đến khi bạn nhập học.",

  reasons: [
    { zh: "全额奖学金", title: "Học bổng toàn phần", text: "Miễn 100% học phí và ký túc xá, trợ cấp đến 3.500 tệ/tháng" },
    { zh: "多个志愿", title: "Apply nhiều nguyện vọng", text: "Apply 1 hay nhiều trường đều không phát sinh thêm phí" },
    { zh: "全程陪伴", title: "Trung tâm viết hồ sơ", text: "Kế hoạch học tập, thư giới thiệu do trung tâm viết và hỗ trợ" },
  ],
  more: { value: "4", label: "loại học bổng: CIS · CSC · Tỉnh · Trường" },

  levelsHead: { zh: "四种学制", title: "4 hệ học", text: "Chọn hệ theo độ tuổi, trình độ tiếng Trung và mục tiêu của bạn" },
  levels: [
    { title: "1 năm tiếng", age: "18 – 35 tuổi", items: ["Học tiếng Trung tại trường", "Nền tảng trước khi vào chuyên ngành", "Có học bổng CIS và học bổng trường"] },
    { title: "Đại học", age: "18 – 22 tuổi", items: ["Đủ 4 loại học bổng", "Xét GPA lớp 10 – 11 và kì I lớp 12", "Cần tín chỉ CSCA với học bổng CIS, trường"] },
    { title: "Thạc sĩ", age: "25 – 35 tuổi", items: ["Đủ 4 loại học bổng", "Xét điểm tốt nghiệp đại học (hệ 4.0)", "Trợ cấp CIS 3.000 tệ/tháng"] },
    { title: "Tiến sĩ", age: "Tư vấn theo hồ sơ", items: ["Học bổng CIS", "Trợ cấp 3.500 tệ/tháng", "Điều kiện cụ thể tư vấn trực tiếp"] },
  ],
  selfFunded: {
    title: "Hệ tự túc (tự chi trả 100%)",
    items: ["GPA 6.5 – 9.0 tùy trường", "HSK3 trở lên – có HSK4 mới vào thẳng chuyên ngành", "Giấy khám sức khỏe"],
  },

  scholarships: {
    title: "Học bổng Trung Quốc",
    head: ["Học bổng", "Chính sách", "Điều kiện"],
    rows: [
      {
        name: "CIS – Học bổng Khổng Tử (toàn phần)",
        sub: "Ngành Giáo dục Hán ngữ quốc tế (sư phạm tiếng Trung), Hán ngữ (ngôn ngữ Trung Quốc)",
        perks: "Miễn 100% học phí và ký túc xá. Trợ cấp/tháng: 2.500 tệ (1 năm tiếng, đại học), 3.000 tệ (thạc sĩ), 3.500 tệ (tiến sĩ) – 10 đến 12 tháng/năm tùy trường",
        req: "1 năm tiếng: HSK5 từ 240 điểm, HSKK cao cấp 60, GPA 8.0. Đại học: HSK5 từ 240 + HSKK cao cấp 65 hoặc HSK6 từ 210 (không phần nào dưới 60), tín chỉ CSCA, GPA 8.0. Thạc sĩ: HSK như đại học, điểm tốt nghiệp 3.0/4.0",
      },
      {
        name: "CIS bán phần",
        sub: "Đại học, thạc sĩ",
        perks: "Miễn 50% học phí, tự đóng ký túc xá. Trợ cấp 2.500 tệ/tháng",
        req: "HSK5 từ 240 + HSKK cao cấp 65 hoặc HSK6 từ 210 (không phần nào dưới 60), tín chỉ CSCA, GPA 8.0",
      },
      {
        name: "CSC – Học bổng Chính phủ",
        sub: "Các khối ngành kinh tế (không dành cho ngành ngôn ngữ, không có hệ 1 năm tiếng)",
        perks: "Như học bổng CIS",
        req: "Như học bổng CIS. Không yêu cầu thi lại HSK theo từng năm",
      },
      {
        name: "Học bổng tỉnh",
        sub: "Đại học, thạc sĩ (không có hệ 1 năm tiếng)",
        perks: "Miễn học phí và ký túc xá. Trợ cấp 800 – 1.500 tệ/tháng (10 tháng/năm, tùy trường)",
        req: "Đại học: HSK5 từ 210 + HSKK cao cấp 60. Thạc sĩ: HSK5 từ 210 + HSKK cao cấp 60 hoặc HSK6 từ 180 + HSKK cao cấp 60",
      },
      {
        name: "Học bổng trường – 1 năm tiếng",
        sub: "Toàn phần / bán phần",
        perks: "Toàn phần: miễn học phí và ký túc xá, không trợ cấp. Bán phần: miễn 50% (thường là học phí), không trợ cấp",
        req: "Toàn phần: bắt buộc HSK4, GPA 6.5. Bán phần: nên có nền HSK3, không bắt buộc GPA",
      },
      {
        name: "Học bổng trường – Đại học",
        sub: "Toàn phần / bán phần",
        perks: "Toàn phần: miễn 100% học phí và ký túc xá, trợ cấp 600 – 800 tệ/tháng. Bán phần: miễn 50% học phí, tự đóng ký túc xá – trợ cấp 0 hoặc 400 tệ/tháng",
        req: "Toàn phần: GPA 7.0, HSK5 từ 180 (HSK4 từ 240 vẫn được), tín chỉ CSCA. Bán phần: HSK4 từ 240 (không trợ cấp) hoặc HSK5 từ 180 + HSKK cao cấp 60 (trợ cấp 400 tệ)",
      },
      {
        name: "Học bổng trường – Thạc sĩ",
        sub: "Toàn phần",
        perks: "Miễn 100% học phí và ký túc xá, trợ cấp 600 – 800 tệ/tháng (tùy trường)",
        req: "Tốt nghiệp đại học từ 2.5/4.0, HSK5 từ 180 + HSKK cao cấp 60",
      },
    ],
    note: "Mức trợ cấp và điều kiện cụ thể thay đổi theo từng trường, từng năm – trung tâm kiểm tra lại khi tư vấn hồ sơ của bạn.",
  },

  timeline: {
    title: "Lịch nộp hồ sơ",
    sub: "Ví dụ cho kỳ nhập học tháng 9/2027",
    steps: [
      { when: "12/2026 – 3/2027", what: "Trung tâm nhận hồ sơ, chọn trường và nguyện vọng" },
      { when: "15/4/2027", what: "Đóng cổng học bổng CIS và CSC" },
      { when: "7 – 9/2027", what: "Học bổng tỉnh, học bổng trường vẫn còn nhận (tùy trường)" },
      { when: "Cuối tháng 6 – 15/7/2027", what: "Có kết quả học bổng CIS và CSC" },
      { when: "Tháng 8/2027", what: "Nhận giấy báo nhập học và giấy JW201/JW202 để làm visa" },
    ],
  },

  documents: {
    title: "Hồ sơ cần chuẩn bị",
    items: [
      "Bảng điểm HSK (và HSKK nếu có)",
      "Học bạ cấp 3 / bảng điểm đại học",
      "Bằng tốt nghiệp cấp 3 / bằng đại học",
      "Giấy khám sức khỏe theo mẫu Trung Quốc",
      "Ảnh 4×6 nền trắng",
      "Hộ chiếu và căn cước công dân",
      "Lý lịch tư pháp",
      "Thông tin quá trình học cấp 1 – 3; căn cước (2 mặt) và số điện thoại của phụ huynh",
    ],
  },

  support: {
    title: "Trung tâm hỗ trợ",
    items: [
      "Kế hoạch học tập, thư giới thiệu do trung tâm viết – học sinh chỉ cần đọc và nắm nội dung trước buổi phỏng vấn",
      "Luyện phỏng vấn online (100% hồ sơ đều phỏng vấn; một số trường yêu cầu quay video thuyết trình)",
      "Apply nhiều trường, nhiều loại học bổng để giảm rủi ro trượt – không phát sinh thêm phí",
      "Lớp luyện thi CSCA do giáo viên bản ngữ trực tiếp giảng dạy – miễn phí cho học viên của trung tâm",
      "Dịch thuật hồ sơ 2 triệu/bộ – miễn phí với học viên có HSK6",
      "Đặt cọc khi nộp hồ sơ, đóng phần còn lại khi có giấy JW201/JW202",
    ],
  },

  costs: {
    title: "Chi phí tự chuẩn bị (ngoài phí làm hồ sơ)",
    groups: [
      {
        title: "Tại Việt Nam",
        items: [
          "Khám sức khỏe theo mẫu Trung Quốc, chụp ảnh",
          "Vali, đồ dùng cá nhân",
          "Sim du lịch và gói VPN dùng những ngày đầu",
          "Vé máy bay (trung tâm hỗ trợ đặt nếu cần)",
          "Thẻ ngân hàng Visa để mở Alipay – thường đổi khoảng 3.000 tệ mang theo",
          "Giáo viên trực tiếp đưa sang trường (không bắt buộc): 25 triệu/lần/trường, không giới hạn số học sinh, hỗ trợ thủ tục trong 1 tuần",
        ],
      },
      {
        title: "Tại Trung Quốc",
        items: [
          "Sim chính chủ: khoảng 600 tệ/năm (Bắc Kinh), 150 tệ/sim ở các tỉnh",
          "Khám sức khỏe: 400 tệ/lần",
          "Bảo hiểm: 800 tệ (theo năm hoặc 4 năm, tùy trường)",
          "Visa cư trú: 400 tệ/năm",
          "Thẻ ngân hàng: 10 tệ/thẻ",
          "Sách vở",
        ],
      },
    ],
  },

  during: {
    title: "Khi đang học tại Trung Quốc",
    items: [
      "Ốm đau, chỗ ở, môn học, kể cả chuyển ngành – chuyển trường: trung tâm làm việc với nhà trường để hỗ trợ",
      "Ở trường có giáo viên phụ trách và cộng đồng du học sinh Việt Nam hỗ trợ",
      "Duy trì học bổng CIS: mỗi môn đạt từ 85/100 điểm, không nghỉ quá số buổi quy định",
      "Không đánh nhau, buôn bán hoặc tự ý đi làm thêm",
      "Ngành kinh tế: năm 4 thực tập tại doanh nghiệp liên kết với trường – làm tốt có thể được giữ lại làm việc",
    ],
  },

  faqTitle: "Câu hỏi thường gặp",
  faq: [
    {
      q: "Trường top đầu là những trường nào?",
      a: "Là các trường thuộc nhóm 985 và 211. 985 là nhóm trường hàng đầu Trung Quốc, 211 là trường đạt chuẩn quốc gia – trường 985 đều thuộc 211, nhưng trường 211 chưa chắc thuộc 985. Trường xếp hạng càng cao thì tỉ lệ chọi càng cao, nên hãy chọn trường theo lực học của bản thân.",
    },
    {
      q: "Ngành nào dễ xin học bổng?",
      a: "Các ngành kinh tế (xuất nhập khẩu, thương mại…) và máy tính dễ xin học bổng hơn, đặc biệt với học bổng CSC. Ngành ngôn ngữ cạnh tranh học bổng cao hơn. Trường mạnh kinh tế thường là các trường bách khoa, kinh tế, thương mại.",
    },
    {
      q: "Trường nào mạnh về ngôn ngữ?",
      a: "Đại học Bắc Kinh, Đại học Ngôn ngữ Bắc Kinh, Sư phạm Bắc Kinh, Thủ đô Bắc Kinh, Sư phạm Hoa Đông, Sư phạm Phúc Kiến, Sư phạm Quảng Tây…",
    },
    {
      q: "Xin visa du học có khó không?",
      a: "Không khó: khi có giấy báo nhập học và giấy JW201/JW202 là đủ điều kiện làm visa du học.",
    },
    {
      q: "Có cần chứng chỉ tiếng Anh không?",
      a: "Chỉ khi học ngành đào tạo bằng tiếng Anh. Chương trình tiếng Anh chỉ có ở một số trường, tỉ lệ học bổng thấp, trợ cấp ít và vẫn yêu cầu tối thiểu HSK3.",
    },
    {
      q: "Có phải thi đánh giá năng lực như tuyển sinh đại học ở Việt Nam không?",
      a: "Không. Trường xét hồ sơ (GPA, HSK, kế hoạch học tập, thư giới thiệu) và phỏng vấn online, không yêu cầu giấy tờ chứng minh năng lực như các cuộc thi tiếng Trung.",
    },
    {
      q: "Nếu trượt học bổng thì sao?",
      a: "Nếu trượt hết nguyện vọng thì chưa thể nhập học kỳ đó. Vì vậy trung tâm khuyên apply nhiều nguyện vọng và nhiều loại học bổng (CIS, tỉnh, trường) – apply nhiều trường không phát sinh thêm phí.",
    },
    {
      q: "Trung tâm có chương trình trao đổi ngắn hạn, du học nghề, trại hè không?",
      a: "Trao đổi ngắn hạn chỉ dành cho sinh viên các trường đại học Việt Nam có liên kết – trung tâm không có chương trình này. Du học nghề chỉ dành cho doanh nghiệp cung ứng lao động. Trại hè (1 – 4 tuần: học, vui chơi, giao lưu văn hóa) – liên hệ trung tâm để được tư vấn.",
    },
  ],

  points: ["Tư vấn chọn hệ, chọn trường, chọn ngành", "Viết kế hoạch học tập & thư giới thiệu", "Luyện phỏng vấn online", "Đồng hành đến khi nhập học"],
  cta: { label: "Đăng ký tư vấn du học", href: "dang-ky.html?khoa=tu-van-du-hoc" },
};
