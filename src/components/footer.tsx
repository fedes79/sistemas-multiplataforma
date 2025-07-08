import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-dark bg-gradient">
            <div className="container py-4">
                <div className="row g-4 align-items-start">
                    {/* Columna 1: Logo y descripción */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                            <div
                                className="d-flex align-items-center justify-content-center rounded gradient-primary me-2"
                                style={{ width: "32px", height: "32px" }}
                            >
                                <span className="text-white fw-bold small">MB</span>
                            </div>
                            <span className="fs-4 text-white fw-bold">Mi Blog</span>
                        </div>
                        <p className="text-secondary mb-0">
                            Una plataforma moderna para compartir conocimientos, ideas y experiencias sobre tecnología, diseño y
                            desarrollo web.
                        </p>
                    </div>

                    {/* Columna 2: Enlaces */}
                    <div className="col-md-4">
                        <h5 className="text-white fw-semibold mb-3">Enlaces</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="/" className="text-secondary text-decoration-none hover-white">Inicio</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/blog" className="text-secondary text-decoration-none hover-white">Blog</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none hover-white">Acerca de</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none hover-white">Contacto</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Categorías */}
                    <div className="col-md-4">
                        <h5 className="text-white fw-semibold mb-3">Categorías</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none hover-white">Tecnología</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none hover-white">Diseño</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none hover-white">Desarrollo</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="#" className="text-secondary text-decoration-none hover-white">Tutoriales</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-secondary my-4" />
                <div className="text-center">
                    <p className="text-secondary mb-0">© 2025 Mi Blog. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}