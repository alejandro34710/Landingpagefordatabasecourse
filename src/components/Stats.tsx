import { motion } from "motion/react";
import { Users, BookOpen, Award, Star } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Estudiantes Activos",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      value: "50+",
      label: "Lecciones Completas",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      value: "8,500+",
      label: "Certificados Emitidos",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Calificación Promedio",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-xl text-slate-400">
            Miles de estudiantes ya están transformando su carrera
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 text-center hover:border-slate-700 transition-all">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Value */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className={`text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-slate-400">{stat.label}</div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: "Tasa de Finalización", value: "87%" },
            { label: "Satisfacción del Estudiante", value: "96%" },
            { label: "Empleabilidad Post-Curso", value: "92%" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/30 border border-slate-800 rounded-xl p-6 text-center"
            >
              <div className="text-2xl text-white mb-1">{item.value}</div>
              <div className="text-slate-400 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
