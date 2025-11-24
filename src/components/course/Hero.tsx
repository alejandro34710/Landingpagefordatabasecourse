import { motion } from "motion/react";
import { Sparkles, Clock, BarChart3, Users } from "lucide-react";

export function Hero() {
  const stats = [
    { icon: Clock, label: "Duración", value: "6 semanas" },
    { icon: BarChart3, label: "Nivel", value: "Fundamental" },
    { icon: Users, label: "Estudiantes", value: "3,200+" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#78716c_1px,transparent_1px),linear-gradient(to_bottom,#78716c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
        
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-transparent to-orange-950/20" />
      </div>

      <div className="section-container py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-amber-200 tracking-wide font-medium">Administración de Empresas</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <span className="block text-amber-50 mb-2">Fundamentos de</span>
            <span className="gradient-text">Mercadotecnia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-stone-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Aprende los principios esenciales del marketing: desde las 4Ps hasta la segmentación de mercados, 
            comportamiento del consumidor y estrategias de posicionamiento que utilizan las empresas líderes mundiales.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-900/50 border border-amber-900/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <stat.icon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-stone-500 font-medium">{stat.label}</div>
                  <div className="text-lg text-amber-50">{stat.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300"
          >
            Comenzar Aprendizaje
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}