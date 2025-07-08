import Link from "next/link"
import { Calendar, Eye } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PostCardProps {
  title: string
  description: string
  category: string
  date: string
  views?: number
  slug: string
  thumbnail?: string
}

export default function PostCard({ title, description, category, date, views, slug, thumbnail }: PostCardProps) {
  return (
    <Card className="card-hover h-full">
      <CardHeader className="p-0">
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg flex items-center justify-center">
          {thumbnail ? (
            <img
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover rounded-t-lg"
            />
          ) : (
            <div className="text-primary/40 text-4xl font-bold">{title.charAt(0)}</div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {date}
          </div>
          {views && (
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {views}
            </div>
          )}
        </div>
        <Link href={`/post/${slug}`} className="text-primary hover:text-primary/80 text-sm font-medium">
          Xem chi tiết →
        </Link>
      </CardFooter>
    </Card>
  )
}
