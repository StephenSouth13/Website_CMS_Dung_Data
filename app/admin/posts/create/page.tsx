"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload, Eye } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"

export default function CreatePostPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    description: "",
    content: "",
    thumbnail: "",
    published: false,
  })

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-")
      .trim()
  }

  const handleTitleChange = (title: string) => {
    setFormData((prev) => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Creating post:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
        <AdminHeader title="Tạo bài viết mới" sidebarCollapsed={sidebarCollapsed} />

        <main className="p-6">
          {/* Back button */}
          <Link href="/admin/posts" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại danh sách bài viết
          </Link>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Thông tin cơ bản</CardTitle>
                    <CardDescription>Nhập thông tin cơ bản của bài viết</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Tiêu đề *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder="Nhập tiêu đề bài viết..."
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="slug">Slug</Label>
                      <Input
                        id="slug"
                        value={formData.slug}
                        onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                        placeholder="duong-dan-bai-viet"
                      />
                      <p className="text-xs text-gray-500">URL: /post/{formData.slug || "duong-dan-bai-viet"}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Mô tả ngắn *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                        placeholder="Mô tả ngắn gọn về nội dung bài viết..."
                        rows={3}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Nội dung bài viết</CardTitle>
                    <CardDescription>Viết nội dung chi tiết của bài viết</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Label htmlFor="content">Nội dung *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                        placeholder="Viết nội dung bài viết ở đây... (Hỗ trợ Markdown)"
                        rows={15}
                        className="font-mono"
                        required
                      />
                      <p className="text-xs text-gray-500">
                        Hỗ trợ Markdown: **bold**, *italic*, `code`, ## heading, etc.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Xuất bản</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="published">Xuất bản ngay</Label>
                      <Switch
                        id="published"
                        checked={formData.published}
                        onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, published: checked }))}
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button type="submit" className="flex-1">
                        {formData.published ? "Xuất bản" : "Lưu nháp"}
                      </Button>
                      <Button type="button" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chuyên mục</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn chuyên mục" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SPSS">SPSS</SelectItem>
                        <SelectItem value="Ebook">Ebook</SelectItem>
                        <SelectItem value="Dữ liệu mẫu">Dữ liệu mẫu</SelectItem>
                        <SelectItem value="Blog">Blog</SelectItem>
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ảnh đại diện</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="mt-4">
                          <Button variant="outline" size="sm">
                            Chọn ảnh
                          </Button>
                          <p className="mt-2 text-xs text-gray-500">PNG, JPG, GIF tối đa 2MB</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
