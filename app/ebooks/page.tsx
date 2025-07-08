import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"

const ebookPosts = [
  {
    title: "Ebook: Nghiên cứu định lượng trong khoa học xã hội",
    description: "Cuốn sách hướng dẫn toàn diện về phương pháp nghiên cứu định lượng cho sinh viên và nhà nghiên cứu",
    category: "Ebook",
    date: "20/01/2025",
    views: 2100,
    slug: "ebook-nghien-cuu-dinh-luong-khoa-hoc-xa-hoi",
  },
  {
    title: "Ebook: Thống kê ứng dụng với SPSS",
    description: "Hướng dẫn chi tiết cách sử dụng SPSS để phân tích thống kê từ cơ bản đến nâng cao",
    category: "Ebook",
    date: "18/01/2025",
    views: 1850,
    slug: "ebook-thong-ke-ung-dung-voi-spss",
  },
  {
    title: "Ebook: Phương pháp nghiên cứu khoa học",
    description: "Tổng quan về các phương pháp nghiên cứu khoa học hiện đại và cách áp dụng trong thực tế",
    category: "Ebook",
    date: "15/01/2025",
    views: 1650,
    slug: "ebook-phuong-phap-nghien-cuu-khoa-hoc",
  },
  {
    title: "Ebook: Phân tích dữ liệu với R và Python",
    description: "Hướng dẫn sử dụng R và Python cho phân tích dữ liệu và machine learning",
    category: "Ebook",
    date: "12/01/2025",
    views: 2300,
    slug: "ebook-phan-tich-du-lieu-r-python",
  },
  {
    title: "Ebook: Thiết kế khảo sát và thu thập dữ liệu",
    description: "Cách thiết kế bảng hỏi, thu thập và xử lý dữ liệu khảo sát một cách khoa học",
    category: "Ebook",
    date: "10/01/2025",
    views: 1400,
    slug: "ebook-thiet-ke-khao-sat-thu-thap-du-lieu",
  },
  {
    title: "Ebook: Phân tích nhân tố và mô hình cấu trúc",
    description: "Hướng dẫn chi tiết về EFA, CFA và SEM trong nghiên cứu khoa học xã hội",
    category: "Ebook",
    date: "08/01/2025",
    views: 1750,
    slug: "ebook-phan-tich-nhan-to-mo-hinh-cau-truc",
  },
]

export default function EbooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thư viện Ebooks</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bộ sưu tập sách điện tử chất lượng cao về nghiên cứu khoa học, phân tích dữ liệu và phương pháp thống kê
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebookPosts.map((post, index) => (
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
