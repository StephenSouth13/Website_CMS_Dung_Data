"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X, User, ShoppingCart, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface HeaderProps {
  currentRole?: "admin" | "user" | null
}

export default function Header({ currentRole }: HeaderProps) {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "SPSS", href: "/spss" },
    { name: "Dữ liệu mẫu", href: "/data" },
    { name: "Ebooks", href: "/ebooks" },
    { name: "Blog", href: "/blog" },
    { name: "Liên hệ", href: "/contact" },
  ]

  // Kiểm tra trạng thái đăng nhập từ localStorage
  useEffect(() => {
    const checkAuthStatus = () => {
      const adminToken = localStorage.getItem("admin_token")
      const userToken = localStorage.getItem("user_token")
      const userRole = localStorage.getItem("user_role")
      const userData = localStorage.getItem("user_data")

      if (adminToken && userRole === "admin") {
        setIsLoggedIn(true)
        setUser({
          name: "Admin",
          email: "admin@dungdata.com",
          cartItems: 0,
          role: "admin",
        })
      } else if (userToken && userData) {
        setIsLoggedIn(true)
        const parsedUserData = JSON.parse(userData)
        setUser({
          name: parsedUserData.name || "Người dùng",
          email: parsedUserData.email || "user@email.com",
          cartItems: parsedUserData.cartItems || 3,
          role: "user",
        })
      } else {
        setIsLoggedIn(false)
        setUser(null)
      }
    }

    // Kiểm tra ngay khi component mount
    checkAuthStatus()

    // Lắng nghe thay đổi localStorage (khi đăng nhập/đăng xuất ở tab khác)
    window.addEventListener("storage", checkAuthStatus)

    return () => {
      window.removeEventListener("storage", checkAuthStatus)
    }
  }, [])

  const handleLogout = () => {
    // Redirect to beautiful logout page
    router.push("/logout")
  }

  // Mock login function for demo (sẽ được thay thế bằng real auth)
  const handleDemoLogin = () => {
    const demoUser = {
      name: "Nguyễn Văn A",
      email: "nguyenvana@email.com",
      cartItems: 3,
    }
    localStorage.setItem("user_token", "demo_token")
    localStorage.setItem("user_data", JSON.stringify(demoUser))
    setIsLoggedIn(true)
    setUser({ ...demoUser, role: "user" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              D
            </div>
            <span className="text-xl font-bold text-primary">Dũng Data</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Đăng nhập
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Đăng ký</Button>
                </Link>
                {/* Demo button - remove in production */}
                <Button variant="outline" size="sm" onClick={handleDemoLogin} className="text-xs bg-transparent">
                  Demo Login
                </Button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                {/* Giỏ hàng - chỉ hiển thị cho user */}
                {user?.role === "user" && (
                  <Link href="/cart">
                    <Button variant="ghost" size="sm" className="relative">
                      <ShoppingCart className="h-4 w-4" />
                      {user?.cartItems > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                          {user.cartItems}
                        </Badge>
                      )}
                    </Button>
                  </Link>
                )}

                {/* User Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{user?.name || "Tài khoản"}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <DropdownMenuSeparator />

                    {user?.role === "user" && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/account" className="flex items-center">
                            <User className="mr-2 h-4 w-4" />
                            Tài khoản của tôi
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                          <Link href="/account/orders" className="flex items-center">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Đơn hàng của tôi
                          </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                          <Link href="/account/downloads" className="flex items-center">
                            <Settings className="mr-2 h-4 w-4" />
                            Tài liệu đã tải
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}

                    {/* Nếu là admin thì hiển thị link admin */}
                    {(currentRole === "admin" || user?.role === "admin") && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link href="/admin/dashboard" className="flex items-center text-primary">
                            <Settings className="mr-2 h-4 w-4" />
                            Quản trị hệ thống
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}

                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="flex items-center text-red-600 focus:text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Đăng xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-2 pt-4 border-t">
                {!isLoggedIn ? (
                  <>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" size="sm" className="w-full justify-start">
                        Đăng nhập
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="w-full">
                        Đăng ký
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" onClick={handleDemoLogin} className="w-full bg-transparent">
                      Demo Login
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="px-2 py-2 border-b">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>

                    {user?.role === "user" && (
                      <>
                        <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Giỏ hàng ({user?.cartItems || 0})
                          </Button>
                        </Link>

                        <Link href="/account" onClick={() => setIsMenuOpen(false)}>
                          <Button variant="ghost" size="sm" className="w-full justify-start">
                            <User className="mr-2 h-4 w-4" />
                            Tài khoản của tôi
                          </Button>
                        </Link>
                      </>
                    )}

                    {(currentRole === "admin" || user?.role === "admin") && (
                      <Link href="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" size="sm" className="w-full justify-start text-primary">
                          <Settings className="mr-2 h-4 w-4" />
                          Quản trị hệ thống
                        </Button>
                      </Link>
                    )}

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-red-600"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Đăng xuất
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
