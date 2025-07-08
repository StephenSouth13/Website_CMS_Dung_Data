# 📘 Website CMS Dũng Data

![Vercel Deploy](https://vercel.com/api/badges/your-vercel-id/deploy-status)  
[🔗 Truy cập website](https://website-cms-dung-data.vercel.app)

Hệ thống website và CMS hiện đại cho **Dũng Data** – nền tảng chia sẻ kiến thức, ebook, dữ liệu mẫu, bài học SPSS và bài viết blog học thuật.  
Xây dựng bằng **Next.js + Tailwind CSS**, thiết kế đẹp, dễ dùng, hỗ trợ đăng nhập, phân quyền và quản lý nội dung chuyên sâu.

---

## 🚀 Tính năng chính

### 🎯 Trang chính
- Hiển thị 5 mục: **SPSS**, **Dữ liệu mẫu**, **Ebook**, **Blog**, **Liên hệ**
- Giao diện dạng **grid responsive** hiện đại
- Bài viết mới nhất và bài nổi bật hiển thị rõ ràng

### 👤 Phân quyền người dùng
- `Admin`: có quyền truy cập CMS (`/admin`), viết và chỉnh sửa bài viết
- `User`: có thể xem bài, gửi liên hệ, và thêm tài liệu vào giỏ hàng

### 📝 CMS riêng cho Admin
- Dashboard thống kê lượt xem, bài viết, liên hệ
- Tạo/sửa/xoá bài viết, ebook, dữ liệu mẫu
- Gửi/nhận phản hồi người dùng
- Phân quyền, kiểm duyệt tài liệu và lượt tải

### 🔐 Authentication
- Đăng nhập/Đăng ký qua Supabase Auth
- Hiển thị nút "Tài khoản" sau khi đăng nhập
- Admin được điều hướng vào CMS, User ở lại trang chính

### 📦 Quản lý tài liệu
- Upload PDF, chọn cho phép tải về hay không
- Tự sinh thumbnail từ trang đầu tiên (sắp triển khai)

---

## 🧱 Công nghệ sử dụng

| Tech               | Mô tả                                  |
|--------------------|------------------------------------------|
| `Next.js 14+`      | Framework React fullstack hiện đại       |
| `Tailwind CSS`     | CSS utility-first, responsive            |
| `TypeScript`       | Tăng an toàn khi code                    |
| `Supabase`         | Auth, Database (PostgreSQL), Storage     |
| `Shadcn UI`        | Bộ UI thành phần chuyên nghiệp           |
| `Lucide Icons`     | Icon hiện đại dùng cho dashboard         |

---

## 📁 Cấu trúc thư mục

```bash
├── app/               # Pages & routing
├── components/        # UI components (Navbar, Card, Footer, etc.)
├── hooks/             # Custom React Hooks
├── lib/               # Supabase config, helpers
├── public/            # Hình ảnh, favicon
├── styles/            # CSS & Tailwind config
├── tailwind.config.ts
├── next.config.mjs
└── ...
📦 Cài đặt & chạy local
bash
Copy
Edit
# Clone project
git clone https://github.com/StephenSouth13/Website_CMS_Dung_Data.git
cd Website_CMS_Dung_Data

# Cài dependencies
pnpm install

# Tạo file môi trường
cp .env.example .env.local
# Thêm key SUPABASE vào file .env.local

# Chạy dev
pnpm dev
🔐 Biến môi trường cần thiết (.env.local)
env
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=https://xyzcompany.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_public_anon_key
📤 Deploy
Triển khai bằng Vercel cực nhanh.

bash
Copy
Edit
# Push lên GitHub
git push origin main

# Truy cập Vercel, import repo
# Gán biến môi trường như file `.env.local`
✨ Định hướng mở rộng tương lai
Tích hợp Stripe để bán ebook

Thêm thông báo real-time khi có liên hệ mới

Export bài viết sang PDF

SEO nâng cao & sitemap XML

🧑‍💻 Tác giả
👨‍💻 StephenSouth13
📍 GitHub
🌐 website-cms-dung-data.vercel.app

📄 License
MIT © 2025 Dung Data – Phát triển bởi phòng CNTT VSM
