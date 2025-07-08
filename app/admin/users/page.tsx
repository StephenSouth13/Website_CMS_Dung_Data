"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Search, Filter, Shield, User, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminHeader from "@/components/admin/admin-header"
import AuthCheck from "@/components/admin/auth-check"

// Mock data
const users = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@email.com",
    role: "user",
    status: "active",
    joinDate: "15/01/2025",
    lastLogin: "22/01/2025 14:30",
    posts: 0,
    downloads: 12,
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@gmail.com",
    role: "user",
    status: "active",
    joinDate: "10/01/2025",
    lastLogin: "21/01/2025 09:15",
    posts: 0,
    downloads: 8,
  },
  {
    id: 3,
    name: "Admin System",
    email: "admin@dungdata.com",
    role: "admin",
    status: "active",
    joinDate: "01/01/2025",
    lastLogin: "22/01/2025 16:45",
    posts: 156,
    downloads: 0,
  },
  {
    id: 4,
    name: "Lê Minh C",
    email: "leminhc@yahoo.com",
    role: "user",
    status: "inactive",
    joinDate: "08/01/2025",
    lastLogin: "18/01/2025 11:20",
    posts: 0,
    downloads: 5,
  },
  {
    id: 5,
    name: "Phạm Thị D",
    email: "phamthid@outlook.com",
    role: "editor",
    status: "active",
    joinDate: "05/01/2025",
    lastLogin: "22/01/2025 08:30",
    posts: 23,
    downloads: 15,
  },
]

export default function AdminUsersPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [createUserOpen, setCreateUserOpen] = useState(false)

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "all" || user.role === selectedRole
    const matchesStatus = selectedStatus === "all" || user.status === selectedStatus
    return matchesSearch && matchesRole && matchesStatus
  })

  const toggleUserStatus = (id: number) => {
    console.log("Toggle user status:", id)
  }

  const deleteUser = (id: number) => {
    console.log("Delete user:", id)
  }

  return (
    <AuthCheck>
      <div className="min-h-screen bg-gray-50">
        <AdminSidebar collapsed={sidebarCollapsed} onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)} />

        <div className={`transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <AdminHeader title="Quản lý người dùng" sidebarCollapsed={sidebarCollapsed} />

          <main className="p-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Danh sách người dùng</CardTitle>
                    <CardDescription>Quản lý tất cả người dùng trong hệ thống</CardDescription>
                  </div>
                  <Dialog open={createUserOpen} onOpenChange={setCreateUserOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Thêm người dùng
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Thêm người dùng mới</DialogTitle>
                        <DialogDescription>Tạo tài khoản người dùng mới trong hệ thống</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="userName">Họ và tên *</Label>
                          <Input id="userName" placeholder="Nhập họ và tên..." />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="userEmail">Email *</Label>
                          <Input id="userEmail" type="email" placeholder="user@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="userRole">Vai trò *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Chọn vai trò" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="user">User</SelectItem>
                              <SelectItem value="editor">Editor</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="userPassword">Mật khẩu tạm *</Label>
                          <Input id="userPassword" type="password" placeholder="Mật khẩu tạm thời" />
                        </div>
                        <div className="flex justify-end space-x-2 pt-4">
                          <Button variant="outline" onClick={() => setCreateUserOpen(false)}>
                            Hủy
                          </Button>
                          <Button onClick={() => setCreateUserOpen(false)}>Tạo người dùng</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Tìm kiếm người dùng..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger className="w-40">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Vai trò" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả vai trò</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tất cả</SelectItem>
                      <SelectItem value="active">Hoạt động</SelectItem>
                      <SelectItem value="inactive">Không hoạt động</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Users Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Người dùng</TableHead>
                      <TableHead>Vai trò</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ngày tham gia</TableHead>
                      <TableHead>Lần cuối online</TableHead>
                      <TableHead>Bài viết</TableHead>
                      <TableHead>Downloads</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                {user.role === "admin" ? (
                                  <Shield className="h-5 w-5 text-primary" />
                                ) : (
                                  <User className="h-5 w-5 text-gray-600" />
                                )}
                              </div>
                            </div>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-gray-500 flex items-center">
                                <Mail className="mr-1 h-3 w-3" />
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.role === "admin" ? "default" : user.role === "editor" ? "secondary" : "outline"
                            }
                          >
                            {user.role === "admin" ? "Admin" : user.role === "editor" ? "Editor" : "User"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>
                            {user.status === "active" ? "Hoạt động" : "Không hoạt động"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="mr-1 h-3 w-3" />
                            {user.joinDate}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">{user.lastLogin}</TableCell>
                        <TableCell className="font-medium">{user.posts}</TableCell>
                        <TableCell className="font-medium">{user.downloads}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Switch
                              checked={user.status === "active"}
                              onCheckedChange={() => toggleUserStatus(user.id)}
                              size="sm"
                            />
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-600 hover:text-red-700"
                              onClick={() => deleteUser(user.id)}
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
                    Hiển thị {filteredUsers.length} trong tổng số {users.length} người dùng
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
