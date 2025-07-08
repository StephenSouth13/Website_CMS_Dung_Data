import { Calendar, Eye, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"

// Mock data - in real app, this would come from API/database
const post = {
  title: "Hướng dẫn phân tích hồi quy tuyến tính với SPSS",
  content: `
    <h2>Giới thiệu về phân tích hồi quy tuyến tính</h2>
    <p>Phân tích hồi quy tuyến tính là một trong những phương pháp thống kê quan trọng nhất trong nghiên cứu khoa học xã hội. Phương pháp này giúp chúng ta hiểu được mối quan hệ giữa một biến phụ thuộc và một hoặc nhiều biến độc lập.</p>
    
    <h3>Các bước thực hiện</h3>
    <ol>
      <li><strong>Chuẩn bị dữ liệu:</strong> Đảm bảo dữ liệu đã được làm sạch và không có giá trị thiếu</li>
      <li><strong>Kiểm tra giả định:</strong> Kiểm tra các giả định của mô hình hồi quy</li>
      <li><strong>Chạy phân tích:</strong> Sử dụng menu Analyze > Regression > Linear trong SPSS</li>
      <li><strong>Giải thích kết quả:</strong> Phân tích các hệ số và ý nghĩa thống kê</li>
    </ol>

    <h3>Giải thích kết quả</h3>
    <p>Khi chạy phân tích hồi quy tuyến tính trong SPSS, bạn sẽ nhận được nhiều bảng kết quả quan trọng:</p>
    
    <ul>
      <li><strong>Model Summary:</strong> Cho biết R², R² hiệu chỉnh và sai số chuẩn</li>
      <li><strong>ANOVA:</strong> Kiểm định ý nghĩa thống kê của mô hình tổng thể</li>
      <li><strong>Coefficients:</strong> Hiển thị các hệ số hồi quy và mức ý nghĩa của từng biến</li>
    </ul>

    <blockquote>
      <p><strong>Lưu ý quan trọng:</strong> Trước khi giải thích kết quả, hãy đảm bảo rằng mô hình của bạn đáp ứng các giả định cơ bản của phân tích hồi quy tuyến tính.</p>
    </blockquote>

    <h3>Ví dụ thực tế</h3>
    <p>Giả sử chúng ta muốn nghiên cứu mối quan hệ giữa điểm số thi đại học (biến phụ thuộc) và số giờ học mỗi ngày (biến độc lập). Sau khi chạy phân tích, chúng ta có thể rút ra kết luận về mức độ ảnh hưởng của việc học tập đến kết quả thi cử.</p>
  `,
  category: "SPSS",
  date: "15/01/2025",
  views: 1250,
  author: "Dũng Data",
  thumbnail: "/placeholder.svg?height=400&width=800",
}

const relatedPosts = [
  {
    title: "Kiểm định độ tin cậy Cronbach's Alpha",
    description: "Hướng dẫn chi tiết cách tính và giải thích hệ số Cronbach's Alpha",
    category: "SPSS",
    date: "12/01/2025",
    views: 980,
    slug: "kiem-dinh-do-tin-cay-cronbach-alpha",
  },
  {
    title: "Phân tích nhân tố khám phá EFA",
    description: "Thực hiện phân tích nhân tố khám phá để rút gọn biến",
    category: "SPSS",
    date: "10/01/2025",
    views: 1150,
    slug: "phan-tich-nhan-to-kham-pha-efa",
  },
  {
    title: "Kiểm định T-Test một mẫu và hai mẫu",
    description: "Hướng dẫn thực hiện các loại kiểm định T-Test",
    category: "SPSS",
    date: "08/01/2025",
    views: 890,
    slug: "kiem-dinh-t-test-mot-mau-hai-mau",
  },
]

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back button */}
        <Link href="/spss" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại SPSS
        </Link>

        {/* Article header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              {post.views.toLocaleString()} lượt xem
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-8 flex items-center justify-center">
          <div className="text-primary/40 text-6xl font-bold">📊</div>
        </div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Related posts */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Bài viết liên quan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <PostCard key={index} {...relatedPost} />
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}
