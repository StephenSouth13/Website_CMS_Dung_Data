import Link from "next/link"
import { ArrowRight, BookOpen, Database, FileText, TrendingUp, Star, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PostCard from "@/components/post-card"

// Mock data
const latestPosts = [
  {
    title: "Hướng dẫn phân tích hồi quy tuyến tính với SPSS",
    description: "Tìm hiểu cách thực hiện phân tích hồi quy tuyến tính một cách chi tiết và chính xác với SPSS",
    category: "SPSS",
    date: "15/01/2025",
    views: 1250,
    slug: "huong-dan-phan-tich-hoi-quy-tuyen-tinh-spss",
  },
  {
    title: "Bộ dữ liệu mẫu khảo sát hành vi tiêu dùng",
    description: "Dữ liệu khảo sát 1000 người tiêu dùng về thói quen mua sắm và các yếu tố ảnh hưởng",
    category: "Dữ liệu mẫu",
    date: "12/01/2025",
    views: 890,
    slug: "bo-du-lieu-mau-khao-sat-hanh-vi-tieu-dung",
  },
  {
    title: "Ebook: Nghiên cứu định lượng trong khoa học xã hội",
    description: "Cuốn sách hướng dẫn toàn diện về phương pháp nghiên cứu định lượng cho sinh viên và nhà nghiên cứu",
    category: "Ebook",
    date: "10/01/2025",
    views: 2100,
    slug: "ebook-nghien-cuu-dinh-luong-khoa-hoc-xa-hoi",
  },
]

const popularPosts = [
  { title: "Cách tính Cronbach's Alpha trong SPSS", views: 3500, slug: "cach-tinh-cronbach-alpha-spss" },
  { title: "Phân tích nhân tố khám phá EFA với SPSS", views: 3200, slug: "phan-tich-nhan-to-kham-pha-efa-spss" },
  { title: "Kiểm định T-Test và cách giải thích kết quả", views: 2800, slug: "kiem-dinh-t-test-giai-thich-ket-qua" },
  { title: "Hướng dẫn làm sạch dữ liệu trong SPSS", views: 2600, slug: "huong-dan-lam-sach-du-lieu-spss" },
  { title: "Phân tích tương quan Pearson và Spearman", views: 2400, slug: "phan-tich-tuong-quan-pearson-spearman" },
]

const categories = [
  {
    title: "SPSS",
    description: "Hướng dẫn sử dụng SPSS từ cơ bản đến nâng cao",
    icon: TrendingUp,
    href: "/spss",
    color: "bg-blue-500",
    count: "156+ bài viết",
  },
  {
    title: "Ebooks",
    description: "Sách điện tử về nghiên cứu và phân tích dữ liệu",
    icon: BookOpen,
    href: "/ebooks",
    color: "bg-green-500",
    count: "24+ cuốn sách",
  },
  {
    title: "Dữ liệu mẫu",
    description: "Bộ dữ liệu mẫu cho thực hành và nghiên cứu",
    icon: Database,
    href: "/data",
    color: "bg-purple-500",
    count: "50+ dataset",
  },
  {
    title: "Blog",
    description: "Bài viết chuyên sâu về nghiên cứu xã hội",
    icon: FileText,
    href: "/blog",
    color: "bg-orange-500",
    count: "80+ bài viết",
  },
]

const features = [
  {
    icon: Star,
    title: "Nội dung chất lượng cao",
    description: "Tất cả tài liệu được biên soạn bởi các chuyên gia có kinh nghiệm",
  },
  {
    icon: Users,
    title: "Cộng đồng học tập",
    description: "Kết nối với hàng ngàn người học SPSS và nghiên cứu khoa học",
  },
  {
    icon: Award,
    title: "Được tin tưởng",
    description: "Được sử dụng bởi sinh viên và giảng viên tại nhiều trường đại học",
  },
  {
    icon: Zap,
    title: "Cập nhật liên tục",
    description: "Nội dung được cập nhật thường xuyên theo xu hướng mới nhất",
  },
]

const stats = [
  { number: "10,000+", label: "Người dùng" },
  { number: "156+", label: "Bài viết SPSS" },
  { number: "24+", label: "Ebooks" },
  { number: "50+", label: "Dữ liệu mẫu" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              🎉 Website mới được nâng cấp hoàn toàn
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Chia sẻ dữ liệu, kiến thức, và nghiên cứu</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Từ Dũng Data - Nơi cung cấp tài liệu, ebook và dữ liệu mẫu chất lượng cao cho người học SPSS và nghiên cứu
              xã hội
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary hover:text-primary/80">
                Khám phá ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Xem video giới thiệu
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn Dũng Data?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất với những tính năng vượt trội
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bài viết mới nhất</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cập nhật những kiến thức và hướng dẫn mới nhất về SPSS, nghiên cứu định lượng và phân tích dữ liệu
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {latestPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Xem tất cả bài viết
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bài đọc nhiều nhất</h2>
            <p className="text-gray-600">Những bài viết được cộng đồng quan tâm nhất</p>
          </div>
          <div className="max-w-3xl mx-auto">
            {popularPosts.map((post, index) => (
              <Link key={index} href={`/post/${post.slug}`}>
                <div className="flex items-center p-4 bg-white rounded-lg mb-4 hover:shadow-md transition-shadow border">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900 hover:text-primary transition-colors">{post.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{post.views.toLocaleString()} lượt xem</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Danh mục nội dung</h2>
            <p className="text-gray-600">Khám phá các chủ đề và tài liệu theo từng lĩnh vực</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <Card className="card-hover text-center h-full border-0 shadow-lg">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <Badge variant="secondary" className="mt-2">
                      {category.count}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng bắt đầu hành trình học tập?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Tham gia cộng đồng hàng ngàn người học và truy cập vào kho tài liệu phong phú về SPSS và nghiên cứu khoa học
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="text-primary">
                Đăng ký miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
