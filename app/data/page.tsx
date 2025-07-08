import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"

const dataPosts = [
  {
    title: "Bộ dữ liệu khảo sát hành vi tiêu dùng 2024",
    description: "Dữ liệu khảo sát 1000 người tiêu dùng về thói quen mua sắm, yếu tố ảnh hưởng và xu hướng tiêu dùng",
    category: "Dữ liệu mẫu",
    date: "20/01/2025",
    views: 1850,
    slug: "bo-du-lieu-khao-sat-hanh-vi-tieu-dung-2024",
  },
  {
    title: "Dataset nghiên cứu giáo dục đại học",
    description: "Dữ liệu về kết quả học tập, động lực học tập và các yếu tố ảnh hưởng đến thành tích sinh viên",
    category: "Dữ liệu mẫu",
    date: "18/01/2025",
    views: 1650,
    slug: "dataset-nghien-cuu-giao-duc-dai-hoc",
  },
  {
    title: "Dữ liệu khảo sát sức khỏe cộng đồng",
    description: "Bộ dữ liệu về tình trạng sức khỏe, thói quen sinh hoạt và các yếu tố nguy cơ trong cộng đồng",
    category: "Dữ liệu mẫu",
    date: "15/01/2025",
    views: 2100,
    slug: "du-lieu-khao-sat-suc-khoe-cong-dong",
  },
  {
    title: "Dataset phân tích thị trường lao động",
    description: "Dữ liệu về tình hình việc làm, mức lương và xu hướng tuyển dụng theo ngành nghề",
    category: "Dữ liệu mẫu",
    date: "12/01/2025",
    views: 1400,
    slug: "dataset-phan-tich-thi-truong-lao-dong",
  },
  {
    title: "Bộ dữ liệu nghiên cứu tâm lý học",
    description: "Dữ liệu khảo sát về các yếu tố tâm lý, stress và sức khỏe tinh thần của người trẻ",
    category: "Dữ liệu mẫu",
    date: "10/01/2025",
    views: 1750,
    slug: "bo-du-lieu-nghien-cuu-tam-ly-hoc",
  },
  {
    title: "Dataset phân tích mạng xã hội",
    description: "Dữ liệu về hành vi sử dụng mạng xã hội và tác động đến đời sống xã hội",
    category: "Dữ liệu mẫu",
    date: "08/01/2025",
    views: 1300,
    slug: "dataset-phan-tich-mang-xa-hoi",
  },
]

export default function DataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dữ liệu mẫu</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bộ sưu tập dữ liệu mẫu chất lượng cao cho thực hành phân tích thống kê, nghiên cứu khoa học và học tập
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataPosts.map((post, index) => (
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
