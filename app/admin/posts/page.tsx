"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Edit, Trash2, Search, Filter, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"
// Thêm AuthCheck wrapper
import AuthCheck from "@/components/admin/auth-check"

// Mock data
const posts = [
  {
    id: 1,
    title: "Hướng dẫn phân tích hồi quy tuyến tính với SPSS",
    category: "SPSS",
    views: 3250,
    date: "15/01/2025",
    status: "published",
    author: "Admin",
  },
  {
    id: 2,
    title: "Kiểm định độ tin cậy Cronbach's Alpha",
    category: "SPSS",
    views: 2890,
    date: "12/01/2025",
    status: "published",
    author: "Admin",
  },
  {
    id: 3,
    title: "Ebook: Nghiên cứu định lượng trong khoa học xã hội",
    category: "Ebook",
    views: 2100,
    date: "10/01/2025",
    status: "draft",
    author: "Admin",
  },
  {
    id: 4,
    title: "Bộ dữ liệu khảo sát hành vi tiêu dùng",
    category: "Dữ liệu mẫu",
    views: 1890,
    date: "08/01/2025",
    status: "published",
    author: "Admin",
  },
  {
    id: 5,
    title: "Phân tích nhân tố khám phá EFA",
    category: "SPSS",
    views: 2650,
    date: "05/01/2025",
    status: "published",
    author: "Admin",
  },
]

// Wrap toàn bộ component trong AuthCheck
export default function AdminPostsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <AuthCheck>
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <AdminHeader title="Quản lý bài viết" sidebarCollapsed={sidebarCollapsed} />

          <main className="p-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Danh sách bài viết</CardTitle>
                    <CardDescription>Quản lý tất cả bài viết trong hệ thống</CardDescription>
                  </div>
                  <Link href="/admin/posts/create">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Tạo bài viết mới
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Tìm kiếm bài viết..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Chọn chuyên mục" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả chuyên mục</SelectItem>
                      <SelectItem value="SPSS">SPSS</SelectItem>
                      <SelectItem value="Ebook">Ebook</SelectItem>
                      <SelectItem value="Dữ liệu mẫu">Dữ liệu mẫu</SelectItem>
                      <SelectItem value="Blog">Blog</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Posts Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tiêu đề</TableHead>
                      <TableHead>Chuyên mục</TableHead>
                      <TableHead>Lượt xem</TableHead>
                      <TableHead>Ngày đăng</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium max-w-xs">
                          <div className="truncate">{post.title}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{post.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Eye className="mr-1 h-4 w-4 text-gray-400" />
                            {post.views.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>{post.date}</TableCell>
                        <TableCell>
                          <Badge variant={post.status === "published" ? "default" : "secondary"}>
                            {post.status === "published" ? "Đã xuất bản" : "Bản nháp"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Link href={`/admin/posts/${post.id}/edit`}>
                              <Button variant="ghost" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-gray-600">
                    Hiển thị {filteredPosts.length} trong tổng số {posts.length} bài viết
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Trước
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      Sau
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </AuthCheck>
  )
}
