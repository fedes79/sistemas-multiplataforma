import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";


export default function Home() {
  return (
    <div className="bg-white">
      <section className="py-5 bg-gradient-hero">
        <div className="container py-5">
        <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold text-dark lh-1 mb-4">
                Bienvenido a{" "}
                <span className="text-gradient-custom rounded-xl">Mi Blog</span>
              </h1>
              <p className="lead text-muted mb-4">
                Descubre contenido de calidad sobre tecnología, diseño y desarrollo web. Una plataforma moderna donde
                compartimos conocimientos y experiencias.
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row gap-4">
                <Link
                  href="/blog"
                  className="btn btn-lg fw-semibold rounded-lg bg-gradient-custom text-white d-inline-flex align-items-center justify-content-center hover-gradient-custom shadow-lg"
                >
                  Explorar Blog
                  <ArrowRight className="ms-2" size={20} />
                </Link>
                <Link href="#features" 
                
                className="custom-btn">
                  Conocer más
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="position-relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: "400px", minHeight: "300px" }}>
                <div className="rounded-3 overflow-hidden shadow-lg" style={{ height: "100%" }}>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Mi Blog"
                    fill
                    className="object-fit-cover"
                  />
                </div>
                <div
                  className="position-absolute bottom-0 start-0 translate-middle rounded-circle gradient-primary opacity-25"
                  style={{ width: "100px", height: "100px" }}
                ></div>
                <div
                  className="position-absolute top-0 end-0 translate-middle rounded-circle bg-gradient-users opacity-25"
                  style={{ width: "120px", height: "120px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark mb-3">¿Por qué elegir Mi Blog?</h2>
            <p className="lead text-muted">Ofrecemos una experiencia única para lectores y creadores de contenido</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body p-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 gradient-primary mb-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <h5 className="fw-bold text-dark mb-3">Contenido de Calidad</h5>
                  <p className="text-muted">
                    Artículos cuidadosamente seleccionados y escritos por expertos en tecnología y desarrollo web.
                  </p>
                </div>
              </div>
            </div>
          
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body p-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-gradient-users mb-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Users className="text-white" size={24} />
                  </div>
                  <h5 className="fw-bold text-dark mb-3">Comunidad Activa</h5>
                  <p className="text-muted">
                    Únete a una comunidad de desarrolladores y diseñadores apasionados por la tecnología.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm card-hover">
                <div className="card-body p-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 bg-gradient-zap mb-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <Zap className="text-white" size={24} />
                  </div>
                  <h5 className="fw-bold text-dark mb-3">Siempre Actualizado</h5>
                  <p className="text-muted">
                    Mantente al día con las últimas tendencias y tecnologías del mundo del desarrollo web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
              <h2 className="text-3xl fw-bold text-white mb-6">¿Listo para comenzar tu viaje de aprendizaje?</h2>
              <p className="lead text-white-50 mb-4">
                Explora nuestros artículos y descubre nuevas perspectivas sobre el mundo de la tecnología.
              </p>
              <Link href="/blog" className="btn btn-light btn-lg d-inline-flex align-items-center text-primary fw-semibold shadow-lg rounded-3">
                Comenzar ahora
                <ArrowRight className="ms-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
