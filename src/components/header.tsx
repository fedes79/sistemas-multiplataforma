"use client"
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, BookOpen } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">
                <Link href="/" className="navbar-brand d-flex align-items-center">
                    <div
                        className="d-flex align-items-center justify-content-center rounded gradient-primary me-2"
                        style={{width: "32px", height:"32px"}}>
                        <span className="text-white fw-bold small">MB</span>
                    </div>
                    <span className="fs-4 fw-bold text-dark">Mi Blog</span>
                </Link>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
                    <nav className="navbar-nav ms-auto">
                        <Link
                            href="/"
                            className="nav-link d-flex align-items-center text-secondary hover-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Home size={18} className="me-1" />
                            <span>Inicio</span>
                        </Link>
                        <Link
                            href="/blog"
                            className="nav-link d-flex align-items-center text-secondary hover-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <BookOpen size={18} className="me-1" />
                            <span>Mi Blog</span>
                        </Link>
                    </nav>
                </div>

            </div>
        </header>
    )
}