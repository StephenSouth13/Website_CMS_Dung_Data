"use client"

import { useState } from "react"
import { Mail, MailOpen, Eye, Trash2, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"
import AuthCheck from "@/components/admin/auth-check"

// Mock data
const contacts = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    subject: "Hỏi về khóa học SPSS",
    message:
      "Chào admin, tôi muốn hỏi về khóa học SPSS cơ bản. Khóa học có phù hợp với người mới bắt đầu không? Thời gian học khoảng bao lâu? Cảm ơn admin.",
    date: "22/01/2025",
    time: "14:30",
    read: false,
    priority: "normal",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@gmail.com",
    subject: "Yêu cầu dữ liệu mẫu",
    message:
      "Xin chào, tôi đang làm luận văn về hành vi tiêu dùng. Có thể cung cấp dữ liệu mẫu về chủ đề này không? Tôi sẵn sàng trả phí nếu cần. Cảm ơn!",
    date: "21/01/2025",
    time: "09:15",
    read: true,
    priority: "high",
  },
  {
    id: 3,
    name: "Lê Minh C",
    email: "leminhc@yahoo.com",
    subject: "Báo lỗi website",
    message:
      "Admin ơi, tôi thấy trang download ebook bị lỗi, không tải được file. Mong admin kiểm tra và sửa lỗi. Cảm ơn admin nhiều.",
    date: "20/01/2025",
    time: "16:45",
    read: true,
    priority: "high",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "phamthid@outlook.com",
    subject: "Góp ý cải thiện website",
    message:
      "Website rất hữu ích! Tôi có một số góp ý: nên thêm chức năng tìm kiếm nâng cao và phân loại bài viết theo độ khó. Hy vọng admin xem xét.",
    date: "19/01/2025",
    time: "11:20",
    read: false,
    priority: "normal",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hoangvane@gmail.com",
    subject: "Hợp tác viết bài",
    message:
      "Chào admin, tôi là giảng viên thống kê tại trường đại học. Tôi muốn hợp tác viết bài cho website. Có thể trao đổi thêm không? Cảm ơn!",
    date: "18/01/2025",
    time: "08:30",
    read: true,
    priority: "high",
  },
]

export default function AdminContactsPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [selectedContact, setSelectedContact] = useState<(typeof contacts)[0] | null>(null)

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "read" && contact.read) ||
      (filterStatus === "unread" && !contact.read)
    return matchesSearch && matchesStatus
  })

  const markAsRead = (id: number) => {
    // Handle mark as read
    console.log("Mark as read:", id)
  }

  const deleteContact = (id: number) => {
    // Handle delete
    console.log("Delete contact:", id)
  }

  return (
    <AuthCheck>
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <AdminHeader title="Quản lý liên hệ" sidebarCollapsed={sidebarCollapsed} />

          <main className="p-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Thư liên hệ</CardTitle>
                    <CardDescription>Quản lý tất cả thư liên hệ từ người dùng</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{contacts.filter((c) => !c.read).length} chưa đọc</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Tìm kiếm liên hệ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Lọc theo trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="unread">Chưa đọc</SelectItem>
                      <SelectItem value="read">Đã đọc</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Contacts Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Người gửi</TableHead>
                      <TableHead>Chủ đề</TableHead>
                      <TableHead>Ngày gửi</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ưu tiên</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContacts.map((contact) => (
                      <TableRow key={contact.id} className={!contact.read ? "bg-blue-50" : ""}>
                        <TableCell>
                          {contact.read ? (
                            <MailOpen className="h-4 w-4 text-gray-400" />
                          ) : (
                            <Mail className="h-4 w-4 text-blue-600" />
                          )}
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">{contact.name}</div>
                            <div className="text-sm text-gray-500">{contact.email}</div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs">
                          <div className="truncate font-medium">{contact.subject}</div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="text-sm">{contact.date}</div>
                            <div className="text-xs text-gray-500">{contact.time}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={contact.read ? "secondary" : "default"}>
                            {contact.read ? "Đã đọc" : "Chưa đọc"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={contact.priority === "high" ? "destructive" : "outline"}>
                            {contact.priority === "high" ? "Cao" : "Thường"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="sm" onClick={() => setSelectedContact(contact)}>
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>{contact.subject}</DialogTitle>
                                  <DialogDescription>
                                    Từ {contact.name} ({contact.email}) - {contact.date} {contact.time}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="mt-4">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-gray-900 whitespace-pre-wrap">{contact.message}</p>
                                  </div>
                                  <div className="flex justify-end space-x-2 mt-4">
                                    {!contact.read && (
                                      <Button onClick={() => markAsRead(contact.id)}>Đánh dấu đã đọc</Button>
                                    )}
                                    <Button variant="outline">Trả lời</Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => deleteContact(contact.id)}
                            >
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
                    Hiển thị {filteredContacts.length} trong tổng số {contacts.length} liên hệ
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
