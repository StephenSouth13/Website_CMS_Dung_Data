"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - trong thực tế sẽ gọi API
    if (formData.email === "admin@dungdata.com" && formData.password === "admin123") {
      // Set session/token here
      localStorage.setItem("admin_token", "mock_admin_token")
      localStorage.setItem("user_role", "admin")
      router.push("/admin/dashboard")
    } else {
      setError("Email hoặc mật khẩu không đúng")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back to home */}
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Về trang chủ
          </Link>

          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Shield className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-primary">Admin CMS</span>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Đăng nhập Admin</CardTitle>
              <CardDescription>Truy cập vào hệ thống quản trị Dũng Data</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Demo credentials */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">🔑 Demo Credentials:</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <p>
                    <strong>Email:</strong> admin@dungdata.com
                  </p>
                  <p>
                    <strong>Password:</strong> admin123
                  </p>
                </div>
              </div>

              {error && (
                <Alert className="mb-4 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Admin</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@dungdata.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mật khẩu</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu admin"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Đang đăng nhập..." : "Đăng nhập Admin"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Không phải admin?{" "}
                  <Link href="/login" className="text-primary hover:underline font-medium">
                    Đăng nhập người dùng
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/10 to-primary/5 items-center justify-center p-8">
        <div className="max-w-md text-center">
          <div className="w-64 h-64 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="text-white text-6xl h-24 w-24" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hệ thống quản trị CMS</h2>
          <p className="text-gray-600">
            Quản lý nội dung, thống kê và tất cả hoạt động của website Dũng Data một cách chuyên nghiệp
          </p>
        </div>
      </div>
    </div>
  )
}
