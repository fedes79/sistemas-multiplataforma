import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="container pt-4">
        <Link href="/blog" className="d-inline-flex align-items-center text-primary text-decoration-none fw-medium">
          <ArrowLeft size={20} className="me-2" />
          Volver al blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container py-5">
        <header className="mb-5">
          <div className="mb-3">
            <span className="badge gradient-primary fs-6">{post.category}</span>
          </div>

          <h1 className="display-4 fw-bold text-dark mb-4 lh-1">{post.title}</h1>

          <p className="lead text-muted mb-4">{post.excerpt}</p>

          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 pb-4 border-bottom">
            <div className="d-flex align-items-center gap-4 text-muted small">
              <div className="d-flex align-items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
              <Share2 size={16} />
              <span>Compartir</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="position-relative rounded-3 overflow-hidden shadow-lg mb-5" style={{ height: "400px" }}>
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-fit-cover" />
        </div>

        {/* Article Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="fs-5 lh-lg text-dark">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="mt-5 pt-4 border-top">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-4">
            <div className="d-flex align-items-center gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-circle gradient-primary"
                style={{ width: "48px", height: "48px" }}
              >
                <span className="text-white fw-bold">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="fw-semibold text-dark mb-0">{post.author}</p>
                <p className="text-muted small mb-0">Autor</p>
              </div>
            </div>

            <Link href="/blog" className="btn text-white fw-bold btn-gradient d-flex align-items-center gap-2">
              Ver más artículos
            </Link>
          </div>
        </footer>
      </article>

      {/* Related Posts */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="h3 fw-bold text-dark text-center mb-5">Artículos Relacionados</h2>
          <div className="row g-4">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <div key={relatedPost.id} className="col-md-4">
                  <article className="card h-100 border-0 shadow-sm card-hover">
                    <div className="position-relative" style={{ height: "200px" }}>
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="card-img-top object-fit-cover"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title fw-bold text-dark mb-2 line-clamp-2">{relatedPost.title}</h5>
                      <p className="card-text text-muted small mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link
                        href={`/blog/${relatedPost.id}`}
                        className="text-primary text-decoration-none fw-medium small"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
