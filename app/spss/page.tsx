import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"

const spssPosts = [
  {
    title: "Hướng dẫn cài đặt SPSS 29 chi tiết từ A-Z",
    description: "Hướng dẫn cài đặt phần mềm SPSS phiên bản mới nhất với các bước chi tiết và xử lý lỗi thường gặp",
    category: "SPSS",
    date: "20/01/2025",
    views: 1850,
    slug: "huong-dan-cai-dat-spss-29-chi-tiet",
  },
  {
    title: "Phân tích hồi quy tuyến tính đơn giản",
    description: "Tìm hiểu cách thực hiện phân tích hồi quy tuyến tính đơn giản và giải thích kết quả trong SPSS",
    category: "SPSS",
    date: "18/01/2025",
    views: 2100,
    slug: "phan-tich-hoi-quy-tuyen-tinh-don-gian",
  },
  {
    title: "Kiểm định độ tin cậy Cronbach's Alpha",
    description: "Hướng dẫn chi tiết cách tính và giải thích hệ số Cronbach's Alpha để đánh giá độ tin cậy thang đo",
    category: "SPSS",
    date: "15/01/2025",
    views: 3200,
    slug: "kiem-dinh-do-tin-cay-cronbach-alpha",
  },
  {
    title: "Phân tích nhân tố khám phá EFA",
    description: "Thực hiện phân tích nhân tố khám phá (EFA) để rút gọn biến và khám phá cấu trúc dữ liệu",
    category: "SPSS",
    date: "12/01/2025",
    views: 2800,
    slug: "phan-tich-nhan-to-kham-pha-efa",
  },
  {
    title: "Kiểm định T-Test một mẫu và hai mẫu",
    description: "Hướng dẫn thực hiện các loại kiểm định T-Test và cách giải thích kết quả một cách chính xác",
    category: "SPSS",
    date: "10/01/2025",
    views: 2400,
    slug: "kiem-dinh-t-test-mot-mau-hai-mau",
  },
  {
    title: "Làm sạch và chuẩn bị dữ liệu trong SPSS",
    description: "Các kỹ thuật làm sạch dữ liệu, xử lý giá trị thiếu và chuẩn bị dữ liệu cho phân tích",
    category: "SPSS",
    date: "08/01/2025",
    views: 1900,
    slug: "lam-sach-chuan-bi-du-lieu-spss",
  },
]

export default function SPSSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hướng dẫn SPSS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tổng hợp các hướng dẫn chi tiết về SPSS từ cơ bản đến nâng cao, giúp bạn thành thạo phần mềm phân tích thống
            kê hàng đầu
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spssPosts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Trước
            </button>
            <button className="px-3 py-2 text-sm font-medium text-white bg-primary border border-primary rounded-md">
              1
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
              Sau
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
