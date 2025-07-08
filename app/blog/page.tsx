import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"

const blogPosts = [
  {
    title: "Xu hướng nghiên cứu khoa học xã hội năm 2025",
    description: "Phân tích các xu hướng mới trong nghiên cứu khoa học xã hội và những thay đổi trong phương pháp luận",
    category: "Blog",
    date: "22/01/2025",
    views: 1200,
    slug: "xu-huong-nghien-cuu-khoa-hoc-xa-hoi-2025",
  },
  {
    title: "Tại sao SPSS vẫn là lựa chọn hàng đầu cho nghiên cứu?",
    description: "So sánh SPSS với các phần mềm thống kê khác và lý do tại sao SPSS vẫn được ưa chuộng",
    category: "Blog",
    date: "20/01/2025",
    views: 1850,
    slug: "tai-sao-spss-van-la-lua-chon-hang-dau",
  },
  {
    title: "Những sai lầm thường gặp khi phân tích dữ liệu",
    description: "Tổng hợp các lỗi phổ biến trong phân tích dữ liệu và cách khắc phục",
    category: "Blog",
    date: "18/01/2025",
    views: 2100,
    slug: "nhung-sai-lam-thuong-gap-phan-tich-du-lieu",
  },
  {
    title: "Cách viết báo cáo nghiên cứu khoa học chuyên nghiệp",
    description: "Hướng dẫn từng bước để viết một báo cáo nghiên cứu đạt chuẩn quốc tế",
    category: "Blog",
    date: "15/01/2025",
    views: 1650,
    slug: "cach-viet-bao-cao-nghien-cuu-khoa-hoc",
  },
  {
    title: "Big Data và tương lai của nghiên cứu xã hội",
    description: "Tác động của Big Data đến phương pháp nghiên cứu khoa học xã hội hiện đại",
    category: "Blog",
    date: "12/01/2025",
    views: 1400,
    slug: "big-data-tuong-lai-nghien-cuu-xa-hoi",
  },
  {
    title: "Machine Learning trong nghiên cứu khoa học xã hội",
    description: "Ứng dụng các thuật toán machine learning để phân tích dữ liệu xã hội",
    category: "Blog",
    date: "10/01/2025",
    views: 1750,
    slug: "machine-learning-nghien-cuu-khoa-hoc-xa-hoi",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chia sẻ kiến thức, kinh nghiệm và những góc nhìn mới về nghiên cứu khoa học, phân tích dữ liệu và xu hướng
            công nghệ
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
