import { motion } from "motion/react";
import { Rocket, CheckCircle, ArrowRight } from "lucide-react";

export function CTA() {
  const benefits = [
    "Acceso inmediato a todo el contenido",
    "Certificado verificable al finalizar",
    "Soporte y mentoría personalizada",
    "Actualizaciones gratuitas de por vida",
    "Comunidad exclusiva de estudiantes",
    "Recursos descargables y plantillas",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6"
              >
                <Rocket className="w-4 h-4" />
                <span className="text-sm">Oferta de Lanzamiento</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl text-white mb-4">
                Comienza tu Transformación{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Hoy Mismo
                </span>
              </h2>

              <p className="text-xl text-slate-400 mb-8">
                Únete a miles de ingenieros que ya dominan las bases de datos y destacan en sus carreras profesionales.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  Empezar Ahora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-colors border border-slate-700">
                  Ver Muestra Gratuita
                </button>
              </div>
            </div>

            {/* Right Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <div className="w-full bg-slate-950/50 border border-slate-700 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-4">
                    50% de Descuento
                  </div>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-3xl text-slate-500 line-through">$199</span>
                    <span className="text-6xl text-white">$99</span>
                  </div>
                  <p className="text-slate-400">Pago único • Acceso de por vida</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">50+ Lecciones en Video</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">15 Proyectos Prácticos</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Certificado Profesional</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Soporte Prioritario</span>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>

                <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                  Inscribirme Ahora
                </button>

                <p className="text-center text-sm text-slate-500 mt-4">
                  Garantía de devolución de 30 días
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4">
            © 2025 DB Academy. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
