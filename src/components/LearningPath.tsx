import { motion } from "motion/react";
import { BookOpen, Code, Wrench, Rocket } from "lucide-react";

export function LearningPath() {
  const phases = [
    {
      icon: BookOpen,
      title: "Fundamentos",
      week: "Semanas 1-2",
      description: "Aprende los conceptos básicos y la teoría detrás de las bases de datos",
      color: "from-blue-500 to-cyan-500",
      items: ["Modelos de datos", "Arquitectura SGBD", "Conceptos ACID"],
    },
    {
      icon: Code,
      title: "Diseño & SQL",
      week: "Semanas 3-5",
      description: "Domina el diseño de BD y el lenguaje SQL desde cero hasta nivel avanzado",
      color: "from-purple-500 to-pink-500",
      items: ["Modelo ER", "Normalización", "Queries complejas"],
    },
    {
      icon: Wrench,
      title: "Optimización",
      week: "Semanas 6-7",
      description: "Optimiza el rendimiento y aprende técnicas de administración profesional",
      color: "from-orange-500 to-red-500",
      items: ["Índices", "Planes de ejecución", "Tuning"],
    },
    {
      icon: Rocket,
      title: "Proyecto Final",
      week: "Semana 8",
      description: "Aplica todo lo aprendido en un proyecto real de sistema de bases de datos",
      color: "from-green-500 to-emerald-500",
      items: ["Diseño completo", "Implementación", "Presentación"],
    },
  ];

  return (
    <section className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Ruta de Aprendizaje
          </h2>
          <p className="text-xl text-slate-400">
            Un camino estructurado de 8 semanas para convertirte en experto
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Connecting Node */}
                <div className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 border-4 border-blue-500 rounded-full z-20"></div>

                <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-xl flex items-center justify-center mb-4`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-sm text-blue-400 mb-2">{phase.week}</div>
                  <h3 className="text-xl text-white mb-3">{phase.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{phase.description}</p>

                  <div className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-white mb-2">Duración Total del Curso</div>
            <div className="text-4xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              8 Semanas
            </div>
            <div className="text-slate-400 text-sm mt-2">
              Con dedicación de 5-7 horas semanales
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
