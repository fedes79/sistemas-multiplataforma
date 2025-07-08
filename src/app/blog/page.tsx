'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/blog-card"
import { Search } from "lucide-react";


export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredBlogPosts, setFilteredBlogPosts] = useState(blogPosts.slice(1));

    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(lowercasedSearchTerm) ||
                post.excerpt.toLowerCase().includes(lowercasedSearchTerm) ||
                post.author.toLowerCase().includes(lowercasedSearchTerm);
            
            const matchesCategory = selectedCategory === "" || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
        setFilteredBlogPosts(filtered);
    }, [searchTerm, selectedCategory]);

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold mb-3">Nuestro Blog</h1>
                    <p className="lead text-muted">
                        Explora artículos sobre tecnología, diseño y desarrollo web escritos por expertos
                    </p>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <Search className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar artículos"
                                className="form-control form-control-lg ps-5 border-0 shadow-sm"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setSelectedCategory(""); // Limpiar categoría al buscar
                                }}
                            />
                        </div>
                    </div>
                </div>
                {blogPosts.length > 0 && (
                    <div className="mb-5">
                        <h2 className="h3 fw-bold text-dark mb-4">Artículo Destacado</h2>
                        <div className="card border-0 shadow-lg overflow-hidden">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="position-relative h-100" style={{ minHeight: "300px" }}>
                                        <Image
                                            src={blogPosts[0].image || "/placeholder.svg"}
                                            alt={blogPosts[0].title}
                                            width={600}
                                            height={400}
                                            className="w-100 h-100 object-fit-cover"
                                        />
                                        <div className="position-absolute top-0 start-0 m-3">
                                            <span className="badge gradient-primary fs-6">{blogPosts[0].category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card-body h-100 d-flex flex-column justify-content-center p-4 p-lg-5">
                                        <h3 className="card-title fw-bold text-dark mb-3">{blogPosts[0].title}</h3>
                                        <p className="card-text text-muted mb-4 fs-5">{blogPosts[0].excerpt}</p>
                                        <div className="d-flex justify-content-between text-muted small mb-4">
                                            <span>Por {blogPosts[0].author}</span>
                                            <span>{new Date(blogPosts[0].date).toLocaleDateString("es-ES")}</span>
                                        </div>
                                        <Link href={`/blog/${blogPosts[0].id}`} className="btn btn-outline-primary fw-semibold fs-5 hover-border-blue-600">
                                            Leer artículo completo →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="mb-5">
                    <h2 className="h3 fw-bold text-dark mb-4">
                        {selectedCategory === "" ? "Todos los Artículos" : `Artículos en ${selectedCategory}`}
                    </h2>
                    <div className="row g-4">
                        {filteredBlogPosts.length > 0 ? (
                            filteredBlogPosts.map((post) => (
                                <div key={post.id} className="col-md-6 col-lg-4">
                                    <BlogCard post={post} />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center text-muted">
                                <p>No se encontraron artículos que coincidan con su búsqueda.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                        <h2 className="h3 fw-bold text-dark mb-4">Explorar por Categorías</h2>
                        <div className="row g-3">
                            {["Tecnología", "Diseño", "Desarrollo", "Tutoriales"].map((category) => (
                                <div key={category} className="col-6 col-md-3">
                                    <Link
                                        href="#"
                                        className={`d-block p-3 bg-light rounded-3 text-center text-decoration-none text-muted fw-medium hover-primary ${selectedCategory === category ? "active" : ""}`}
                                        onClick={() => {
                                            setSelectedCategory(category);
                                            setSearchTerm(""); // Limpiar término de búsqueda al seleccionar categoría
                                        }}
                                    >
                                        {category}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}