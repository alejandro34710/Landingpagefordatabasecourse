import { motion } from "motion/react";
import { Database, Code, GitBranch, Zap } from "lucide-react";

export function Hero() {
  const floatingIcons = [
    { Icon: Database, delay: 0, x: -20, y: -30 },
    { Icon: Code, delay: 0.2, x: 20, y: -20 },
    { Icon: GitBranch, delay: 0.4, x: -30, y: 20 },
    { Icon: Zap, delay: 0.6, x: 30, y: 30 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6"
            >
              Curso Completo • 100% Práctico • Certificado Incluido
            </motion.div>

            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Domina las{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Bases de Datos
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8">
              Aprende desde fundamentos hasta técnicas avanzadas de diseño, optimización y administración de bases de datos. El curso definitivo para ingenieros de sistemas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                Comenzar Curso Gratis
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                Ver Demo
              </button>
            </div>

            <div className="flex items-center gap-8 text-slate-400">
              <div>
                <div className="text-white text-2xl">50+</div>
                <div className="text-sm">Lecciones</div>
              </div>
              <div>
                <div className="text-white text-2xl">12h</div>
                <div className="text-sm">Contenido</div>
              </div>
              <div>
                <div className="text-white text-2xl">4.9/5</div>
                <div className="text-sm">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              {/* Central Database Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                  <Database className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + delay, duration: 0.5 }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: delay }}
                    className="w-20 h-20 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center hover:border-blue-500 transition-colors cursor-pointer"
                  >
                    <Icon className="w-10 h-10 text-blue-400" />
                  </motion.div>
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                {floatingIcons.map((_, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${floatingIcons[index].x}%)`}
                    y2={`calc(50% + ${floatingIcons[index].y}%)`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 + floatingIcons[index].delay }}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#9333ea" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
