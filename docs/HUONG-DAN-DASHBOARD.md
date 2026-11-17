# Dashboard quản trị – Du học Ngọc Lâm Anh

Địa chỉ: **`/quan-tri`** (ví dụ `https://<tên-miền>/quan-tri`). Đăng nhập bằng **tài khoản Google**.

| Mục | Ai dùng được | Làm gì |
|---|---|---|
| Tổng quan | mọi người | Số đăng ký mới, bài chờ duyệt, lối tắt viết bài |
| Bài viết | quyền *Viết bài* | Soạn bài (định dạng, ảnh kéo-thả/dán, YouTube, nhãn), lưu nháp, gửi duyệt |
| | quyền *Đăng & duyệt bài* | Đăng ngay, duyệt / trả bài, ẩn bài, sửa bài người khác |
| Đăng ký học | quyền *Xử lý đăng ký học* | Xem đăng ký từ form trên web, gọi/Zalo, đổi trạng thái, giao người phụ trách, ghi chú |
| Nội dung trang | quyền *Sửa nội dung trang* | Liên hệ, ưu đãi du học, học phí – lưu vào GitHub, web tự cập nhật sau 3 – 5 phút |
| Nhân viên & quyền | chỉ admin | Thêm/khóa/xóa tài khoản, chọn quyền từng người |

Bài đăng hiện ở trang **Tin tức** (`/blog`), cùng với bài trên Blogger (nếu vẫn dùng).

---

## Cài đặt lần đầu (làm một lần)

### 1. Tạo cơ sở dữ liệu D1 trên Cloudflare
Trong thư mục dự án, chạy:
```bash
npx wrangler login
npx wrangler d1 create du-hoc-ngoc-lam-anh
```
Lệnh thứ hai in ra `database_id`. Dán vào `wrangler.jsonc` thay cho `REPLACE_WITH_D1_DATABASE_ID`, rồi tạo bảng:
```bash
npx wrangler d1 migrations apply DB --remote
```

### 2. Tạo khóa đăng nhập Google
1. Vào https://console.cloud.google.com → tạo dự án (ví dụ "NLA Dashboard").
2. **APIs & Services → OAuth consent screen**: chọn *External*, tên ứng dụng "Du học Ngọc Lâm Anh", email hỗ trợ. Ở *Audience* bấm **Publish app** (hoặc thêm email nhân viên vào *Test users*).
3. **Credentials → Create credentials → OAuth client ID** → *Web application*.
   - **Authorized redirect URIs**:
     - `https://<tên-miền-web>/api/auth/google/callback`
     - `http://localhost:3000/api/auth/google/callback` (để chạy trên máy)
4. Chép **Client ID** và **Client secret**.

### 3. Tạo khóa GitHub (cho mục Nội dung trang)
https://github.com/settings/personal-access-tokens → **Generate new token (fine-grained)**
- *Repository access*: Only select repositories → `Quynhchinese/Du-hoc-ngo-lam-anh`
- *Permissions → Contents*: **Read and write**
- Chép token.

### 4. Đặt khóa bí mật trên Cloudflare
Cloudflare → Workers & Pages → **du-hoc-ngo-lam-anh → Settings → Variables and Secrets** → thêm dạng **Secret**:
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GITHUB_TOKEN`

(Không đặt `DEV_LOGIN` trên Cloudflare.)

### 5. Đẩy code lên GitHub → Cloudflare tự deploy
Lần đầu đăng nhập: email trong `ADMIN_EMAILS` (`wrangler.jsonc`, hiện là `trungtamquynhchinese@gmail.com`) tự trở thành **admin**. Sau đó admin thêm nhân viên ở mục **Nhân viên & quyền**.

---

## Chạy thử trên máy
```bash
npx wrangler d1 migrations apply DB --local
npm run dev
```
Mở http://localhost:3000/quan-tri. File `.dev.vars` (không đưa lên GitHub) có `DEV_LOGIN=1` để **đăng nhập thử không cần Google** – chỉ hoạt động khi chạy `npm run dev`.

## Ghi chú kỹ thuật
- Dữ liệu (tài khoản, bài viết, ảnh, đăng ký) nằm trong D1; bảng ở `migrations/`.
- Ảnh tải lên được thu nhỏ trên trình duyệt (≤ 1600 px, WebP) rồi lưu trong D1, phục vụ ở `/media/...`.
- Nội dung trang nằm ở `src/content/site.json`; dashboard ghi file này qua GitHub → mỗi lần lưu là một commit. Sau đó trên máy nhớ `git pull` trước khi sửa code.
- Trang Tin tức, dashboard và API chạy động trên Worker. Gói Workers miễn phí giới hạn 10 ms CPU/lượt truy cập; nếu thấy lỗi 1102 khi đông người dùng, nâng lên gói Workers Paid (5 USD/tháng).
