import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  console.log('post.image:', post.image, 'post.title:', post.title);
  return (
    <article className="card h-100 border-0 shadow-sm card-hover">
      <div className="position-relative" style={{ height: "200px" }}>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={300}
          height={200}
          className="card-img-top object-fit-cover rounded-top"
        />
        <div className="position-absolute top-0 start-0 m-3">
          <span className="badge gradient-primary">{post.category}</span>
        </div>
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold text-dark mb-3 line-clamp-2">{post.title}</h5>

        <p className="card-text text-muted mb-3 line-clamp-3">{post.excerpt}</p>

        <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1">
              <User size={14} />
              <span>{post.author}</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link href={`/blog/${post.id}`} className="text-primary text-decoration-none fw-medium">
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  )
} 